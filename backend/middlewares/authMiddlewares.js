const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = asyncHandler(async(req,res,next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token,process.env.JWT_CODE);
            req.user = await User.findById(decodedToken.id).select("-password");
            next();
        } catch(e) {
            res.status(401);
            throw new Error("Invalid Token");
        }
    }

    if(!token) {
        res.status(401);
        throw new Error("Token not found");
    }

});

module.exports = {authMiddleware};