const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middleware/asyncErrors');
const User = require('../models/user')

exports.registerUser = catchAsyncError( async(req, res, next)=>{
    const {name, email, password, role} = req.body;
    const newUser = await User.create({
        name, email, password, role
    })
    res.status(201).json({
        message:"user created successfully",
        newUser
    })
})