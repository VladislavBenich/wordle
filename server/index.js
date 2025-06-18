const http = require('http')
const words = require('./words.json')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Max-Age', 2592000)

    if (req.url === '/word') {
        const word = words[Math.floor(Math.random() * words.length)]
        res.end(JSON.stringify(word))
    } else {
        res.end('Error')
    }
})

server.listen(3001, () => {
    console.log('Server started')
})
