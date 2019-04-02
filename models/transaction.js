const mongoose = require('mongoose')
const schema = mongoose.Schema

let transactionsSchema = new schema({
    member: {type: schema.Types.ObjectId, ref: 'Members'}, 
    in_date: Date, 
    out_date: Date, 
    due_date: Date, 
    fine: Number, 
    booklist: [{type: schema.Types.ObjectId, ref: 'Books'}]
})

transactionsSchema.post('findOneAndUpdate', function(next){
    console.log(next.in_date);
    console.log(next.due_date.getDate());

    let days = 0
    if(next.in_date>next.due_date){
       days = (next.in_date-next.due_date)/(24*60*60*1000)
       days = Math.ceil(days)
    }
    
    next.fine = days * 1000

    next.save()
})

let Transaction = mongoose.model("Transactions",transactionsSchema)

module.exports = Transaction