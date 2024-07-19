const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('../models/user');

const router = express.Router();

// userinsertion
router.post('/userdetailsinsertion', async (req, res) => {
    const data = req.body;

    try {
        const newUser = new UserModel(data);
        await newUser.save();
        return res.status(200).json({
            message: "Successfully Inserted",
            success: true

        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true

        })

    }


})
// userlogein
router.post('/userlogedin', async (req, res) => {
    const data = req.body;
    let email=data.email;
    console.log(email)

    try {
        const User = await UserModel.findOne({email});
        console.log(User)

        if (User.password === data.password) {
            return res.status(200).json({
                message: "Successfully logedin",
                success: true,
                data: User

            })
        }
        else {
            return res.status(400).json({
                message: "failed to logedin",
                success: false,


            })

        }
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true

        })

    }


})
module.exports = router