(async () => {
    const { bot } = require('../../createBot')
    const { basicQnaMakerDialog } = require('../../createBot/qnaMaker')
    const intents = require('../../createBot/luis')

    intents.matches('institucional', session => session.beginDialog('/faq-institucional'))

    bot.dialog('/faq-institucional', basicQnaMakerDialog)

})()