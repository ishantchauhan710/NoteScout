const bcrypt = require("bcryptjs/dist/bcrypt");
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

userSchema.pre('save',async function(next) {
    if(!this.isModified('userPassword')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.userPassword = await bcrypt.hash(this.userPassword,salt);
})

const User = mongoose.model('User',userSchema);
module.exports = User;