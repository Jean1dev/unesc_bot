const Markup = require('telegraf/markup')

module.exports = (watsonApiResponse, telegramContext) => {
    watsonApiResponse.forEach(recognizer => {
        if (recognizer.type === 'suggestion') {
            const opcoes = []
            let arrayAuxiliar = []
            let posicaoAtual = 0
            recognizer.data.map(item => item.label).forEach(label => {
                if (posicaoAtual === 2) {
                    opcoes.push(arrayAuxiliar)
                    arrayAuxiliar = []
                    posicaoAtual = 0
                }
                arrayAuxiliar.push(label)
                posicaoAtual++
            })

            if (arrayAuxiliar.length) {
                opcoes.push(arrayAuxiliar)
            }

            const tecladoOpcoes = Markup.keyboard(opcoes).resize().extra()      
            telegramContext.reply('você pode escolher uma das opções abaixo', tecladoOpcoes)      
        }

        telegramContext.reply(recognizer.text)
    })
}