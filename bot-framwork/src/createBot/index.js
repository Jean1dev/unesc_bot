const builder = require('botbuilder')
const { brazilianQnaMakerTools } = require('./qnaMaker')

const connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})

const bot = new builder.UniversalBot(connector)

bot.library(brazilianQnaMakerTools.createLibrary())

module.exports = { bot, connector }