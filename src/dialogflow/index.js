const builder = require('botbuilder')
const { bot } = require('../createBot')

function iniciarDialogoSaudacao(session) {
    session.beginDialog('/saudacao')
}

function iniciarDialogoQuestionamentosSobreCurso(session) {
    session.beginDialog('/cursos')
}

function michele(session) {
    session.beginDialog('/michele')
}

bot.dialog('/', [
    session => builder.Prompts.text(session, `Oi, qual seu Nome`)
    ,
    (session, results) => {
        session.send(`Oi ${results.response}`)
        iniciarDialogoQuestionamentosSobreCurso(session)
    }
])

bot.dialog('/michele', [
    session => builder.Prompts.text(session, `Dae man`),//dae
    session => builder.Prompts.text(session, `ta se fazendo de besta aquela mina ainda?`),//quem
    session => builder.Prompts.text(session, `A michele seu imbecil`), //ah, acho q sim pq
    session => builder.Prompts.text(session, `ela ta te dando varios migue, mete o loco logo`),
])

require('./waterfalls/cursos')
require('./waterfalls/saudacao')