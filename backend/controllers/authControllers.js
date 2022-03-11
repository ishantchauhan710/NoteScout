const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUserController = asyncHandler(async(req,res) => {
    
    const {userName,userEmail,userPassword,userProfilePicture} = req.body;

    const userExist = await User.findOne({userEmail});

    if(userExist) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({userName,userEmail,userPassword,userProfilePicture});

    if(user) {
        res.status(201).json({
            _id: user._id,
            userName: user.userName,
            userEmail: user.userEmail,
            userProfilePicture: user.userProfilePicture
        })
    } else {
        res.status(400);
        throw new Error("An unknown error occurred");
    }
    
});

module.exports = {registerUserController};