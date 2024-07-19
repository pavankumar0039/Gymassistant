const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const MyworkoutSchema=Schema({
    workout: [{
        type: String
    }],
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports=MyworkoutSchema