import { InitializeSequelize } from './db.js'

const sequelize = InitializeSequelize()

async function testConnection() {
    try {
        await sequelize.authenticate()
        console.log('Postgres connection: OK')
    } catch (err) {
        console.error('Postgres connection: FAILED ->', err.message)
        process.exitCode = 1
    } finally {
        await sequelize.close()
    }
}

testConnection()