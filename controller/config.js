export const config = {
    cloudflareUrl: process.env.DDNS_CF_API_URL,
    cloudflareZone: process.env.DDNS_CF_ZONE,
    cloudflareDnsRecordToUpdate: process.env.DDNS_CF_DNS_RECORD_TO_UPDATE,
    cloudflareApiKey: process.env.DDNS_CF_API_KEY,
    cfUpdateSleepSeconds: process.env.DDNS_CF_UPDATE_SLEEP_SECONDS || 30,
    dbHostname: process.env.DDNS_CF_DB_HOSTNAME || '192.168.1.109',
    dbPort: process.env.DDNS_CF_DB_PORT,
    dbDatabasename: process.env.DDNS_CF_DB_DATABASENAME || 'cloudflare_ddns',
    dbUsername: process.env.DDNS_CF_DB_USERNAME || 'cloudflare_ddns',
    dbPassword: process.env.DDNS_CF_DB_PASSWORD || 'change this',
    dbDataTable: process.env.DDNS_CF_DB_DATA_TABLE || 'dns_update_history',
    dbDataCleanupDays: process.env.DDNS_CF_DB_DATA_TABLE_CLEANUP_DAYS || 30,
    cloudflareHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    cloudflareDnsRecordUpdateComment: process.env.DDNS_CF_DNS_RECORD_UPDATE_COMMENT || 'Updated by auto DDNS',
    cloudflareDnsRecordToUpdateProxied: process.env.DDNS_CF_DNS_RECORD_TO_UPDATE_PROXIED || true,
    lookupPublicIpUrlPrimary: "https://api64.ipify.org", //claims no limits
    lookupPublicIpUrlSecondary: "https://icanhazip.com", //claims no limits
    lookupPublicIpUrlTertiary: "https://ipinfo.io/ip" //50k requests per month on the free tier
}