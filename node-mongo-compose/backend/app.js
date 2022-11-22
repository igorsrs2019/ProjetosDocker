const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//Middlewares
server.use(bodyParser.urlencoded({extends:true}))
server.use(bodyParser.json())
server.use(cors())

//Start Server
server.listen(3000)

//ODM
const Client = restful.model('Client',  {
    name: { type: String, required: true }
})

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runvalidators: true})


//Routes
Client.register(server, '/clients')