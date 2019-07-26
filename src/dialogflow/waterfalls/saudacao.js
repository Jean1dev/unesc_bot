(async () => {
    const builder = require('botbuilder')
    const { bot } = require('../../createBot')
    
    bot.dialog('/saudacao', [
        session => {
            builder.Prompts.text(session, `oi`)
        },

        (session, results) => {
            session.endDialog(results.response)
        }
    ])
})()