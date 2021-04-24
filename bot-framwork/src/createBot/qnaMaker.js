const cognitiveServices = require('botbuilder-cognitiveservices')
const brazilianTools = require('../tools/brazilianQnaMakerTools')

const recognizer = new cognitiveServices.QnAMakerRecognizer({
    endpointHostName: process.env.QNA_ENDPOINT,
    knowledgeBaseId: process.env.QNA_KNOWLEDGE_BASE_ID,
    authKey: process.env.QNA_SUBSCRIPTION_KEY,
    top: 3
})

const brazilianQnaMakerTools = new brazilianTools.BrazilianQnaMakerTools()

const basicQnaMakerDialog = new cognitiveServices.QnAMakerDialog({
    recognizers: [recognizer],
    defaultMessage: 'Não encontrado! Tente alterar os termos da pergunta!',
    qnaThreshold: 0.5,
    feedbackLib: brazilianQnaMakerTools,
})

module.exports = { basicQnaMakerDialog, brazilianQnaMakerTools }