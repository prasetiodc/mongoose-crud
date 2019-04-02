const Member = require('../models/member')

class Members{
    static findAll(req, res){
        Member.find()
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static findById(req, res){
        Member.findById(req.params.id)
        .then(data=>{
            res.status(200).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static delete(req, res){
        Member.deleteOne({_id:req.params.id})
        .then(data=>{
            res.status(200).json("Delete Success")
        })
        .catch(err=>{
            console.log(err);    
        })
    }

    static create(req, res){
        
        let newMember = new Member({
            name: req.body.name, 
            address: req.body.address, 
            zipcode: req.body.zipcode, 
            email: req.body.email, 
            phone: req.body.phone
        })
        Member.create(newMember)
        
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err.message);    
        })
    }

    
    static update(req, res){        
        let newMember = {
            name: req.body.name, 
            address: req.body.address, 
            zipcode: req.body.zipcode, 
            email: req.body.email, 
            phone: req.body.phone
        }
        Member.findOneAndUpdate(req.params.id, newMember, {new:true})
        .then(data=>{
            res.status(201).json(data)
        })
        .catch(err=>{
            console.log(err);    
        })
    }
}

module.exports = Members