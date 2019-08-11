const builder = require('botbuilder')
const { bot } = require('../createBot')

function iniciarDialogoSaudacao(session) {
    session.beginDialog('/saudacao')
}

function iniciarDialogoQuestionamentosSobreCurso(session) {
    session.beginDialog('/cursos')
}

function testsQnaMaker(session) {
    console.log(`working`)
    session.beginDialog('/tests')
}

bot.dialog('/', 
    // session => builder.Prompts.text(session, `Oi, qual seu Nome`)
    // ,
    // (session, results) => {
    //     session.send(`Oi ${results.response}`)
    //     testsQnaMaker(session)
    // }
    testsQnaMaker
)

require('./waterfalls/cursos')
require('./waterfalls/saudacao')
require('./waterfalls/tests')