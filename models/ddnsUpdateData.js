import { DataTypes } from '@sequelize/core'
import {InitializeSequelize} from '../controller/db.js'
import {config} from '../controller/config.js'

const sequelize = InitializeSequelize()

const ddnsUpdateData = sequelize.define(config.dbDataTable, {
    publicIp: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cloudflareIp: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    error: {
        type: DataTypes.STRING(500),
        allowNull: true,
    }
}, {
    timestamps: true,
})

export {ddnsUpdateData}