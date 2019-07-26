const builder = require('botbuilder')

const connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})

const bot = new builder.UniversalBot(connector)

module.exports = { bot, connector }