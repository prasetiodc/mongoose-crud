const mongoose = require('mongoose')
const schema = mongoose.Schema

let bookSchema = new schema({
    isbn: String, 
    title: String, 
    author: String, 
    category: String, 
    stock: Number
})

let Book = mongoose.model("Books",bookSchema)  

module.exports = Book