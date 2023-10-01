const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
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
userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.getJWTToken = function (){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

userSchema.methods.comparePassword = async function(pwd){
    return await bcrypt.compare(pwd, this.password)
}
module.exports = mongoose.model("User", userSchema)