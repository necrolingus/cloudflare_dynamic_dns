import axios from 'axios'
import { config } from '../controller/config.js'


//Define variables
const url = `${config.cloudflareUrl}${config.cloudflareZone}/dns_records/?name=${config.cloudflareDnsRecordToUpdate}`
const apiKey = config.cloudflareApiKey

//Set the headers
let headers = config.cloudflareHeaders
headers["Authorization"] = `Bearer ${apiKey}`

//Get the current Cloudflare IP
async function getCfIp() {
    try {
        const response = await axios.get(url, { headers: headers })
        const result = response.data.result

        //Return the IP and ID of the DNS record
        const ip = result[0].content
        const id = result[0].id
        if (result.length == 1) {
            return {ip: ip.trim(), id: id}
        } 
        
    } catch (error) {
        throw new Error(`${error.response.status} - ${error.response.statusText}`)
    }
}

export {getCfIp}