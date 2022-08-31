const mongoose = require("mongoose")

const Product = mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    categories:{type:Array,required:true},
    img:{type:String, required:true},
    size:{type:Array},
    colors:{type:Array},
    price:{type:Number, required:true},
    inStock:{type:Boolean, default:true},


},{timestamps:true})

module.exports = mongoose.model("Product", Product)