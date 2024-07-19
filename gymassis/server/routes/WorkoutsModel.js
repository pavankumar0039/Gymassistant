const express = require('express');
const WorkoutModel = require('../models/workouts');
const router = express.Router();



// insertingcompanydetails
router.post("/insertworkoutdetails", async (req, res) => {
    const data = req.body;
    console.log(data)
    try {
        const NewWorkout = new WorkoutModel(data);
        await NewWorkout.save();
        return res.status(200).json({
            message: "successfully inserted",
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
});

// getwotkoutsdetails
router.get('/getworkoutdetails',async (req,res)=>{
    try {
        const workouts= await WorkoutModel.find({});
       
        return res.status(200).json({
            message: "successfully getting workouts",
            success: true,
            data:workouts
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
})
module.exports=router
