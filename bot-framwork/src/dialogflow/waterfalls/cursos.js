(async () => {
    const builder = require('botbuilder')
    const { bot } = require('../../createBot')
    
    bot.dialog(`/cursos`, [
        session => builder.Prompts.text(session, `Qual curso vc tem interesse`)
        ,
        (session, results) => {
            session.endDialog(`O derick é um merda`)
        }
    ])

})()