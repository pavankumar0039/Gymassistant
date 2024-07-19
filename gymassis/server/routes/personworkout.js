
const express = require('express');
const mongoose = require('mongoose');
const MyworkoutSchema = require('../models/myworkout');
const router = express.Router();

router.post('/insertingmyworkout', async (req, res) => {
    let workout = req.body.clientarray;
    let email = req.body.email;

    
    try {
        const workoutModel = mongoose.model(email, MyworkoutSchema);
        const newmyworkout = new workoutModel({ workout });  // Use object format for creating the new document

        
        const error = newmyworkout.validateSync();
        if (error) {
            console.error('Validation error:', error);
            return res.status(400).json({
                message: 'Validation failed',
                error: error.message,
                success: false
            });
        }

        await newmyworkout.save();
        console.log('Workout saved successfully');
        return res.status(200).json({
            message: "Successfully myworkout inserted",
            success: true
        });
    } catch (error) {
        console.error('Error inserting workout:', error);
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
});

router.post('/gettingmyworkout', async (req, res) => {
    let email = req.body.email;

    try {
        const workoutModel = mongoose.model(email, MyworkoutSchema);
        const yourdetails = await workoutModel.find({});  // Await the find operation

        
        return res.status(200).json({
            message: "Successfully myworkouts fetched",
            success: true,
            data: yourdetails
        });
    } catch (error) {
        console.error('Error fetching workouts:', error);
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
});

module.exports = router;
