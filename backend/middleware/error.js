const ErrorHandler = require('../utils/errorHandler')
module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error"
    
    //cast errors
    if(err.name=='CastError'){
        const message = `no results found. Invalid: ${err.path}`
        err = new ErrorHandler(message,400)
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}