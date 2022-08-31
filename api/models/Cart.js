const mongoose = require("mongoose")

const Cart = mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            ProductId:{type:String},
            quantity:{type:Number},
        }],
},{timestamps:true})

module.exports = mongoose.model("Cart", Cart)