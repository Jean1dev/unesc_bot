(async () => {
    const { bot } = require('../../createBot')
    const { basicQnaMakerDialog } = require('../../createBot/qnaMaker')
    const intents = require('../../createBot/luis')
    
    bot.dialog('/tests', basicQnaMakerDialog)

})()