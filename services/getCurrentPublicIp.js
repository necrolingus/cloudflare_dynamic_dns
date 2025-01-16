import axios from 'axios'
import { config } from '../controller/config.js'


//Build the lookup services array
const primary = config.lookupPublicIpUrlPrimary
const secondary = config.lookupPublicIpUrlSecondary
const tertiary = config.lookupPublicIpUrlTertiary
const pubIpServices = [primary, secondary, tertiary]

//Loop through the services and return if one of them returns the IP address
async function getPubIp () {
    for (const service of pubIpServices) {
        try {
            const response = await axios.get(service)
            return {ip: response.data}

        } catch (error) {
            console.log(`Failed to fetch public IP from ${service}:`, error.message)
        }
    }
    throw new Error(`999 - All calls to public IP lookup services failed.`)

}

export {getPubIp}
