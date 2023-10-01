const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/asyncErrors');
const User = require('../models/user')
const sendToken = require('../utils/jwtToken')

exports.registerUser = catchAsyncError(async (req, res, next)=>{
    const user = await User.create(req.body);
    
    sendToken(user, 201, res)   
})

exports.loginUser = catchAsyncError( async (req,res,next)=> {
    const {email, password} = req.body;
    if(!email || !password) return next(new ErrorHandler("Invalid credentials", 401))

    const user = await User.findOne({email}).select("+password");
    if(!user) return next(new ErrorHandler("Invalid credentials", 401));

    const isPasswordMatched = await user.comparePassword(req.body.password);
    if(!isPasswordMatched) return next(new ErrorHandler("Invalid credentials", 401));

    sendToken(user, 200, res)
})

exports.logout = catchAsyncError(async (req, res, next)=>{
    res.cookie("token",null, {
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:"logged out"
    })
})