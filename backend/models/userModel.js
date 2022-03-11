const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },
        userEmail: {
            type: String,
            required: true
        },
        userPassword: {
            type: String,
            required: true
        },
        userProfilePicture: {
            type: String,
            required: true
        },
    },
    {timeStamps: true}
);

const User = mongoose.model('User',userSchema);
module.exports = User;