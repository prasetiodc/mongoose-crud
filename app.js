const mongoose = require('mongoose')
const express = require("express")
const route = require('./routes')
const port = 3000

let app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

mongoose.connect('mongodb://localhost/test', {useNewUrlParser:true})

app.use('/', route)

app.listen(port, ()=>{
    console.log(`SERVER RUNNING ON ${port}`)
})