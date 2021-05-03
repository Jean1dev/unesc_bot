require('dotenv').config()
console.log(process.env.TELEGRAM_API_KEY)
const botResponse = require('./functions/bot-response')
const Telegraf = require('telegraf')
const session = require('telegraf/session')
const axios = require('axios')
const Markup = require('telegraf/markup')

const baseURL = 'http://164.90.255.59:8082/assistant' // 'http://api-watson.herokuapp.com/assistant'
const http = axios.create({ baseURL })

const bot = new Telegraf(process.env.TELEGRAM_API_KEY)

require('./notificar-users')

bot.use(session())

bot.start(async context => {
    const nome = context.update.message.from.first_name
    await context.replyWithMarkdown(`*Olá, ${nome}!*\n Sou o Unibot vou te ajudar com algumas duvidas sobre o Uniedu`,  Markup.removeKeyboard().extra())
    await context.reply(`só um poquinho deixa eu criar sua sessão aqui`)

    const { data } = await http.get('session')

    await context.reply(`prontinho sessão criada`)
    await context.reply(`essa é a sua sessão ${data.session}`)
    console.log('chat id:', context.chat.id, 'from :', context.update.message.from.id)
    context.session.state = {
        nome,
        session: data.session,
    }
})

bot.on('text', context => {
    if (!context.session.state) {
        context.reply('ainda nao consegui criar sua sessão, digite /start para recomecar')
        return
    }

    http.post('message', {
        session_id: context.session.state.session,
        message: context.message.text,
        saveMessage: false
    }).then(({ data }) => {
        console.log(data)
        if (!data.length) {
            context.reply('Ainda nao sei lidar com essa situação, tente de outra forma')
            return
        }

        botResponse(data, context)
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data)
            context.reply('Ops, parece que sua sessão expirou crie uma nova com /start')
            return
        }

        context.reply('Ops, parece que ocorreu um erro interno digite /start para recomeçar')
    })
})

bot.startPolling()