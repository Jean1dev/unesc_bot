const Telegram = require('telegraf/telegram')
const telegram = new Telegram(process.env.TELEGRAM_API_KEY)

const users = [512142034, 884603223]

users.forEach(uid => telegram.sendMessage(uid, 'Bom dia já estou online'))