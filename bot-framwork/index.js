/**
 * migracao do botbuilder v3 para v4
 * https://docs.microsoft.com/en-us/azure/bot-service/migration/javascript-migration-quickreference?view=azure-bot-service-4.0
 */

require('dotenv-extended').load()
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log(`bot on na porta 3000`)
})

module.exports = app

require('./src/bot.services.init')

