// const builder = require('botbuilder')
const { bot } = require('../createBot')
const intents = require('../createBot/luis')

// function iniciarDialogoSaudacao(session) {
//     session.beginDialog('/saudacao')
// }

// function iniciarDialogoQuestionamentosSobreCurso(session) {
//     session.beginDialog('/cursos')
// }

// function testsQnaMaker(session) {
//     session.beginDialog('/tests')
// }

// intents.matches('Cursos', session => {
//     session.send('LUIS works')
// })

bot.dialog('/', intents)

// require('./waterfalls/cursos')
// require('./waterfalls/saudacao')
require('./waterfalls/tests')
require('./waterfalls/institucional')