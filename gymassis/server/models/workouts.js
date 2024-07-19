const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const WorkoutSchema=Schema({
    image:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    focusarea:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    preparation:{
        type:String,
        required:true
    },
    execution:{
        type:String,
        required:true
    },
    keytips:{
        type:String,
        required:true
    },
    equipment:{
        type:String,
        required:true

    },
    note:{
        type:String,
    }
})
const WorkoutModel=mongoose.model('Workouts',WorkoutSchema)
module.exports=WorkoutModel;