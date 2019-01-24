const Port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(Port, function(){
    console.log(`BACKEND está iniciado na porta ${Port}.`)
})

module.exports = server