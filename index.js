// automatically load env file to our app
require('dotenv').config()

// import express
const express = require('express')

// import cors
const cors = require('cors')

require('./db/connection')

const router = require('./routes/router')

// create server app
const server = express()

// to store port number
const PORT = 4000 || process.env.PORT

// use cors express.json and router in server app
server.use(cors())
server.use(express.json())
server.use(router)

// export uploads folder to client
server.use('/uploads',express.static('./uploads'))

server.listen(PORT, () => {
    console.log(`EMS server started at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send('EMS Server Started')
})