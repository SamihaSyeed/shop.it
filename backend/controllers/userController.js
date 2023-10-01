const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/asyncErrors');
const User = require('../models/user')

exports.registerUser = catchAsyncError(async (req, res, next)=>{
    const user = await User.create(req.body);
    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token
    })    
})

exports.loginUser = catchAsyncError( async (req,res,next)=> {
    const {email, password} = req.body;
    if(!email || !password) return next(new ErrorHandler("Invalid credentials", 401))

    const user = await User.findOne({email}).select("+password");
    if(!user) return next(new ErrorHandler("Invalid credentials", 401));

    const isPasswordMatched = await user.comparePassword(req.body.password);
    if(!isPasswordMatched) return next(new ErrorHandler("Invalid credentials", 401));

    const token = user.getJWTToken();

    res.status(201).json({
        success:true,
        token
    }) 
})