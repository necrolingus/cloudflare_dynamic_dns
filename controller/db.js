// ...existing code...
import { Sequelize } from 'sequelize'
import { config } from './config.js'

function InitializeSequelize () {
  const sequelize = new Sequelize(
    config.dbDatabasename,
    config.dbUsername,
    config.dbPassword,
    {
      host: config.dbHostname,
      port: config.dbPort ? Number(config.dbPort) : undefined,
      dialect: 'postgres',
      logging: false,
    }
  )

  return sequelize
}

export {InitializeSequelize}
// ...existing code...