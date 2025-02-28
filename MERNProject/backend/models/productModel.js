import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{type:String , required:true},
    image:{type:String , required:true},
    brand:{type:String , required:true},
    category:{
        type:mongoose.Schema.Types.ObjectId , 
        ref:"Category" ,required:true
    },
    description:{type:String},
    price:{type:Number , required:true},
    countInStock:{type:Number , required:true,default:0},
    quantity:{type:Number , required:true}
},{timestamps:true})

const Product = mongoose.model("product",productSchema)
export default Product