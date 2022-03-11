const registerUserController = async(req,res) => {
    const {userName,userEmail,userPassword,userProfilePicture} = req.body;
    res.json({
        userName,userEmail
    })
};

module.exports = {registerUserController};