const express = require('express')
const bodyParser = require('body-parser')
const CalculationController = require('./application/controller/CalculationController.js')

const jsonPaser = bodyParser.json()

//const urlencodedPaser bodyParser.urlencoded({extend:})

const route = express.Router()

route.get('/', (req, res) => res.render("index"))


route.post('/calculation',jsonPaser, CalculationController.create)
route.get('/calculations',CalculationController.findAll)
module.exports = route 
