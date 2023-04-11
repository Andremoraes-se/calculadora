const express = require('express')
const route = require('./route')
const path = require('path')

const database = require('./config/database');

const server = express()

server.set('view engine', 'ejs')    

server.use(express.static('public'))

server.set('views', path.join(__dirname, 'application/views'))

server.use(express.urlencoded({extended: true}))

server.use(route)
database.sync(() => console.log(`teste ${process.env.DB_NAME}`) )

server.listen(3000, () => console.log("Servidor RODANDO!!"))