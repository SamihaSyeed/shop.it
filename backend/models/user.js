const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "please enter your name"],
        minLength:[3, "enter valid name"],
        maxLength:[30, "cannot exceed 30 characters"]
    },
    email:{
        type:String,
        required:[true,"Please enter Your email"],
        unique:true,
        validate:[validator.isEmail, "Invalid Email"]
    },
    password:{
        type:String,
        required:[true,"Please enter Password"],
        minLength:[8, "Password should be greater than 8 characters"],
        select:false
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordTocken: String,
    resetPasswordExpire: Date
})

module.exports = userSchema