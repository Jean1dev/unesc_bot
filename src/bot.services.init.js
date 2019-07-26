const app = require('../index')
const { connector } = require('./createBot')
require('./dialogflow')

app.post('/api/messages', connector.listen())
