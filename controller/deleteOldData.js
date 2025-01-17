import { Op } from '@sequelize/core'
import { ddnsUpdateData } from '../models/ddnsUpdateData.js'
import { config } from './config.js'

async function cleanupOldData() {
    try {
        const result = await ddnsUpdateData.destroy({
            where: {
                createdAt: {
                    [Op.lt]: new Date(new Date() - config.dbDataCleanupDays * 24 * 60 * 60 * 1000)
                }
            }
        })
        console.log(`Cleanup completed. ${result} records older than ${config.dbDataCleanupDays} days deleted.`)
    } catch (error) {
        console.error('Error during cleanup:', error)
    }
}

export { cleanupOldData }