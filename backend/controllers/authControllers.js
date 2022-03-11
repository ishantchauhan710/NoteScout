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

const loginUserController = asyncHandler(async(req,res) => {
    
    const {userEmail,userPassword} = req.body;

    const user = await User.findOne({userEmail});

    if(user) {
        if(await user.matchPassword(userPassword)) {
            res.json({
                _id: user._id,
                userName: user.userName,
                userEmail: user.userEmail,
                userProfilePicture: user.userProfilePicture
            });
        } else {
            res.status(400);
            throw new Error("Incorrect Password");
        }
    } else {
        res.status(400);
        throw new Error("No user with the provided email exists");
    }

    
});



module.exports = {registerUserController,loginUserController};