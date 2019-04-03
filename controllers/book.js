const Book = require('../models/book')

class Books{
    static findAll(req, res){
        let keyword = req.query.keyword
        let query = null
        if(keyword){
            query = Book.find(
                {$or: [
                    { "title" : { $regex: keyword}},
                    { "author" : { $regex: keyword}}
                ]}
            )        
        }else{
            query = Book.find()
        }
        query
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static findById(req, res){
        Book.findById(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static delete(req, res){
        Book.deleteOne({_id:req.params.id})
        .then(data=>{
            res.status(200).json("Delete Success")
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static create(req, res){        
        let newBook = new Book({
            isbn: req.body.isbn, 
            title: req.body.title, 
            author: req.body.author, 
            category: req.body.category, 
            stock: req.body.stock
        })
        Book.create(newBook)
        
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    
    static update(req, res){        
        let newBook = {
            isbn: req.body.isbn, 
            title: req.body.title, 
            author: req.body.author, 
            category: req.body.category, 
            stock: req.body.stock
        }
        Book.findOneAndUpdate(req.params.id, newBook, {new:true})
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }
}

module.exports = Books