const Transaction = require('../models/transaction')

class Transactions{
    static findAll(req, res){
        Transaction.find()
        .populate("member")
        .populate("booklist")
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static findById(req, res){
        Transaction.findById(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static delete(req, res){
        Transaction.deleteOne({_id:req.params.id})
        .then(data=>{
            res.status(200).json("Delete Success")
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static create(req, res){
        let books = req.body.booklist.split(',')
        let newTransaction = new Transaction({
            member: req.body.member, 
            in_date: req.body.in_date, 
            out_date: req.body.out_date, 
            due_date: req.body.due_date, 
            fine: req.body.fine, 
            booklist: books
        })
        Transaction.create(newTransaction)
        
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    
    static update(req, res){        
        let newTransaction = {
            member: req.body.member, 
            in_date: new Date, 
            out_date: new Date, 
            due_date: req.body.due_date, 
            fine: req.body.fine, 
            booklist: req.body.booklist
        }
        Transaction.findOneAndUpdate(req.params.id, newTransaction, {new:true})
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static patch(req, res){        
        let newTransaction = { 
            in_date: req.body.in_date
        }
        Transaction.findOneAndUpdate(req.params.id, newTransaction, {new:true})
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }
}

module.exports = Transactions