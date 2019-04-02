const mongoose = require('mongoose')
const schema = mongoose.Schema

let memberSchema = new schema({
    name: String, 
    address: String, 
    zipcode: String, 
    email: {
        type : String,
        required :true,
        validate: {
            validator: function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message: "Email tidak valid"
        }
    },
    phone: {
        type : Number,
        required :true,
        validate: {
            validator: function(v){
                console.log(String(v).length);
                
                return String(v).length<=13 && String(v).length>=11
            },
            message: "Phone tidak valid"
        }
    },
})

memberSchema.path('email').validate(function(value) {

    return Member.findOne({ email: value })
    .then(data=>{
        if(data){
            return Promise.resolve(false)
        }else{
        return Promise.resolve(true)
        }
    })
    .catch(err=>{
        return Promise.reject(err)
    })

})

// memberSchema.path('email').validate(function(value) {

let Member = mongoose.model("Members",memberSchema)


module.exports = Member
