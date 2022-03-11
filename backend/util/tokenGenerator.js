const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_CODE,{expiresIn: "1d"});
}

module.exports = generateToken;