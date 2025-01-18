import axios from 'axios'
import { config } from '../controller/config.js'


//Define variables
const url = `${config.cloudflareUrl}${config.cloudflareZone}/dns_records/`
const apiKey = config.cloudflareApiKey
const comment = config.cloudflareDnsRecordUpdateComment
const dnsRecord = config.cloudflareDnsRecordToUpdate
const proxied = config.cloudflareDnsRecordToUpdateProxied === "true" //will be boolean true if equals to true, else false

//Set the headers
let headers = config.cloudflareHeaders
headers["Authorization"] = `Bearer ${apiKey}`

//Set the new Cloudflare IP
async function updateCfIp(ip, dnsId) {
    try {

        //Build the object to pass for the update
        const data = {
            "comment": comment,
            "content": ip,
            "name": dnsRecord,
            "proxied": proxied,
            "ttl": 3600,
            "type": "A"
        }
        
        const response = await axios.put(`${url}${dnsId}`, data, { headers: headers })
        return "IP Updated Successfully"
        //return response.data.result

    } catch (error) {
        console.log(error)
        throw new Error(`${error.response.status} - ${error.response.statusText}`)
    }
}

export {updateCfIp}