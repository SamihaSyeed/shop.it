const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require('../middleware/asyncErrors');
const ApiFeatures = require("../utils/apiFeatures");

exports.createProduct = catchAsyncError(async (req, res, next)=>{
   
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
    
})

exports.updateProduct = catchAsyncError(async (req, res, next)=>{
    try{let product = await Product.findById(req.params.id)
    product = await Product.findByIdAndUpdate(req.params.id,req.body,[])
    res.status(200).json({
        success:true,
        message:"updated the product details",
        product
    })}
    catch(err){
        return next(new ErrorHandler("Product not found", 404))
    }
} )
  
exports.deleteProduct = catchAsyncError(async (req, res, next)=>{
    try{
        let product = await Product.findById(req.params.id)
        let temp = product
        product = await Product.findByIdAndDelete(req.params.id,req.body,[])
        res.status(200).json({
            success:true,
            message:"product deleted", 
            temp
    })}
    catch(err){
        return next(new ErrorHandler("Product not found", 404))
    }
})

exports.getAllProducts = catchAsyncError(async (req, res)=>{
    const productCount = await Product.countDocuments();
    const perPage = req.query.limit;
    const conditions = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .paginate(perPage)
    const products = await conditions.query;
    
    res.status(200).json({
        success:true, products, productCount
    })
}  )