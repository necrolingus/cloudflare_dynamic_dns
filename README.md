# 🚀 Cloudflare Dynamic DNS

Spin up this Node.js app in Docker or as a standalone app to have your own secure dynamic DNS service. 🧪

### The app features the following:
- 👉 Utilizes 3 different free services to get your current public IP address: https://api64.ipify.org, https://icanhazip.com, and https://ipinfo.io/ip. It checks them sequentially and fails over gracefully if a service is down.
- 👉 Allows you to set how often you want to check if your IP changed, down to 30 seconds. The 30 second limit is hard coded to prevent any potential rate limits.
- 👉 Stores your current public IP, your Cloudflare DNS record IP, and any errors in a database for analysis and alerting. You can use your own Postgres Database or spin one up with the app in Docker Compose.
- 👉 Allows you to set pretty much any parameter using environment variables.

### Environment Variables you can set 
- **DDNS_CF_API_KEY**: Your Cloudflare API key. Only grant the necessary permissions, such as "DNS Edit" on the required Zone.
- **DDNS_CF_API_URL**: By default it should be https://api.cloudflare.com/client/v4/zones/
- **DDNS_CF_DB_DATABASENAME**: For example, cloudflare_ddns. To keep things simple, ensure the database name and username use the same values, especially when using Postgres in Docker. If you will be using your own Postgres, specify anything you'd like.
- **DDNS_CF_DB_DATA_TABLE**: For example, dns_update_history. This is the table name that will automatically be created in your database.
- **DDNS_CF_DB_DATA_TABLE_CLEANUP_DAYS**: After each iteration, records older than this number of days will be deleted automatically.
- **DDNS_CF_DB_HOSTNAME**: For example, ddns-cloudflare-db. This is the hostname of your Postgres database.
- **DDNS_CF_DB_PASSWORD**: Your Postgres user password
- **DDNS_CF_DB_PORT**: Your Postgres port number.
- **DDNS_CF_DB_USERNAME**: For example, cloudflare_ddns. To keep things simple, ensure the username and database name use the same values, especially when using Postgres in Docker. If you will be using your own Postgres, specify anything you'd like.
- **DDNS_CF_DNS_RECORD_TO_UPDATE**: The domain name you want to update, for example, something.com, or my.site.com
- **DDNS_CF_DNS_RECORD_TO_UPDATE_PROXIED**: true or false. This specifies if the DNS record should be proxied via Cloudflare.
- **DDNS_CF_DNS_RECORD_UPDATE_COMMENT**: The comment you want to be added to your DNS record in Cloudflare. Can be anything.
- **DDNS_CF_UPDATE_SLEEP_SECONDS**: How many seconds the application should check if your public IP and DNS Record IPs are in sync. Can be as low as 30 seconds.
- **DDNS_CF_ZONE**: The Zone ID of your Cloudflare site.



