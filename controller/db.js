import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';
import {config} from '../controller/config.js'

function InitializeSequelize () {
  const sequelize = new Sequelize({
    dialect: PostgresDialect,
    host: config.dbHostname,
    port: config.dbPort,
    database: config.dbDatabasename,
    user: config.dbUsername,
    password: config.dbPassword,
    ssl: false,
    clientMinMessages: 'notice',
  })

  return sequelize
}

export {InitializeSequelize}