const express = require('express')
const api = express.Router()

api.get('/', (req, res, next) => {
    let body = req.body
    console.log(body)
    res.json({
        test: 'words'
    })
})

api.post('/', (req, res, next) => {
    let body = req.body
    console.log(body)
    res.json(body)
})


module.exports = api