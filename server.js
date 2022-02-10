const morgan = require('morgan')
const express = require('express')
const bodyParser = require('body-parser')
const colors = require('colors')
const moment = require('moment')
const mongoose = require('mongoose')


const {
    MongoClient
} = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    collection.insertOne({
        user: "tyler"
    })
})

// comment

// new code
const app = express()
var port = process.env.PORT || 5000;
app.use(morgan('dev'))
app.listen(port, console.log(`port listening on ${port}`.red))
app.use(express.static(__dirname + "/public"));
app.use('/macrogreens', express.static(__dirname + "/public/macrogreens.html"))
console.log(__dirname)
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }))
const api = require('./api/api')
app.use('/api', api);