const mongoose = require("mongoose")

const Order = mongoose.Schema({
    userId:{type:String,required:true},
    products:[
        {
            ProductId:{type:String},
            quantity:{type:Number},
        }],
        amount: {type: Number, required:true},
        address: {type: Object, required:true},
        status:{type:String, default: "pending"}
},{timestamps:true})

module.exports = mongoose.model("Order", Order)