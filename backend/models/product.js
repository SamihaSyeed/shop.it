const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "please enter product name"]
    },
    price:{
        type:Number,
        required:[true, "please enter product price"],
        maxLength:[8, "price cannot exceed 99999999Rs"]
    },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    category:{
        type:String,
        required:[true, "Please choose product category"]
    },
    stock:{
        type:Number,
        required:[true, "Please enter no. of stock"],
        default:1
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema)