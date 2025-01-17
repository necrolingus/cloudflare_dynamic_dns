import {ddnsUpdateData} from './ddnsUpdateData.js'

async function createOrUpdateTables() {
    try {
        await ddnsUpdateData.sync({alter: true}); 
        console.log(`ddnsUpdateData table has been created/updated.`)
        
    } catch (error) {
        console.error(`Error while creating/updating tables: ${error}`)
    }
}

export {createOrUpdateTables}