const builder = require('botbuilder')

const recognizer = new builder.LuisRecognizer(process.env.LUIS_MODEL_URL)

const intents = new builder.IntentDialog({ recognizers: [ recognizer ] })

module.exports = intents