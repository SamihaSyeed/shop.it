const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./asyncErrors");
const jwt = require('jsonwebtoken')
const User = require('../models/user')
exports.isAuthenticatedUser = catchAsyncError( async (req, res, next)=> {
    const {token} = req.cookies
    console.log({token})
    if(!token) return next(new ErrorHandler("Unauthorized request", 401))

    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id)
    next()
})