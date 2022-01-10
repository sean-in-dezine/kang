const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const moment = require('moment')


const app = express()
const port = 8080
app.use(morgan('dev'))
app.listen(port, console.log(`port listening on ${port}`.red))
app.use(express.static(__dirname + "/public"));
console.log(__dirname)
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }))
const api = require('./api/api')
app.use('/api', api)