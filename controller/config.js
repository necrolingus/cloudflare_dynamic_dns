export const config = {
    cloudflareUrl: process.env.DDNS_CF_API_URL,
    cloudflareZone: process.env.DDNS_CF_ZONE,
    cloudflareDnsRecordToUpdate: process.env.DDNS_CF_DNS_RECORD_TO_UPDATE,
    cloudflareApiKey: process.env.DDNS_CF_API_KEY,
    cfUpdateSleepSeconds: process.env.DDNS_CF_UPDATE_SLEEP_SECONDS || 30,
    dbHostname: process.env.DDNS_CF_DB_HOSTNAME,
    dbPort: process.env.DDNS_CF_DB_PORT,
    dbDatabasename: process.env.DDNS_CF_DB_DATABASENAME,
    dbUsername: process.env.DDNS_CF_DB_USERNAME,
    dbPassword: process.env.DDNS_CF_DB_PASSWORD,
    dbDataTable: process.env.DDNS_CF_DB_DATA_TABLE,
    dbDataCleanupDays: process.env.DDNS_CF_DB_DATA_TABLE_CLEANUP_DAYS || 30,
    cloudflareHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cloudflareDnsRecordUpdateComment: process.env.DDNS_CF_DNS_RECORD_UPDATE_COMMENT || 'Updated by auto DDNS',
    cloudflareDnsRecordToUpdateProxied: process.env.DDNS_CF_DNS_RECORD_TO_UPDATE_PROXIED || true,
    lookupPublicIpUrlPrimary: "https://api64.ipify.org", //claims no limits
    lookupPublicIpUrlSecondary: "https://icanhazip.com", //claims no limits
    lookupPublicIpUrlTertiary: "https://ipinfo.io/ip" //50k requests per month ont the free tier
}