(async () => {
    const { bot } = require('../../createBot')
    const { basicQnaMakerDialog } = require('../../createBot/qnaMaker')
    
    bot.dialog('/tests', basicQnaMakerDialog)
})()