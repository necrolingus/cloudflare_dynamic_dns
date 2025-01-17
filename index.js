import {getCfIp} from './services/getCurrentCloudflareIp.js'
import {getPubIp} from './services/getCurrentPublicIp.js'
import {updateCfIp} from './services/updateCloudflareIp.js'
import {config} from './controller/config.js'
import {delay} from './controller/asyncSleep.js' 
import {createOrUpdateTables} from './models/modelSync.js'
import {ddnsUpdateData} from './models/ddnsUpdateData.js'
import {cleanupOldData} from './controller/deleteOldData.js'


//Create the table if it does not exist
await createOrUpdateTables()

//Check if the sleep time is good
const sleepSeconds = config.cfUpdateSleepSeconds

//Do some checks
if (sleepSeconds < 30) {
    console.log("The minimum sleep time is 30 seconds. Exiting.")
    process.exit(1)
}

if (config.cloudflareDnsRecordToUpdateProxied !== "true" && config.cloudflareDnsRecordToUpdateProxied !== "false") {
    console.error("Invalid value for DDNS_CF_DNS_RECORD_TO_UPDATE_PROXIED. Expected 'true' or 'false'.")
    process.exit(-1)
}

//Run the app
async function main() {
    while (true) {
        console.log("Starting process...")
        let updatedIp = null

        try {
            //Get the current Cloudflare IP
            const cfIp = await getCfIp()

            //Get the current public IP
            const pubIp = await getPubIp()

            //Update cloudflare if needed
            if (cfIp.ip !== pubIp.ip) {
                console.log("IP addresses do not match. Update required.")
                updatedIp = await updateCfIp(pubIp.ip, cfIp.id)
            }

            // Insert the DNS data into the database
            await ddnsUpdateData.create({publicIp: pubIp.ip, cloudflareIp: cfIp.ip, error: null})

        } catch (error) {
            //Handle potential DB errors
            try {
                await ddnsUpdateData.create({ publicIp: null, cloudflareIp: null, error: error.message });
            } catch (dbError) {
                console.error("Failed to log error to the database:", dbError.message);
            }
            console.error(error.message)
            process.exit(1)
        }
        
        //Clean old data
        await cleanupOldData()
        
        //Just log after this iteration is done
        console.log(`Process completed. Sleeping for ${sleepSeconds} seconds...`)

        //Sleep
        await delay(sleepSeconds * 1000)
    }
}

main()

