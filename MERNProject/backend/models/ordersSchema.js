import mongoose from "mongoose";

const ordersSchema = mongoose.Schema({
    user : {type:mongoose.Schema.Types.ObjectId ,ref:"User" , required:true},
    orderItems:[
        {
            name:{type:String , required:true},
            qty:{type:Number , required:true},
            image:{type:String , required:true},
            price:{type:Number , required:true},
            product:{type:mongoose.Schema.Types.ObjectId ,ref:"Product" , required:true}
        }
    ],
    shippingAddress:{
        address:{type:String , required:true},
        city:{type:String , required:true},
        postalcode:{type:Number , required:true},
    },
    paymentMethod:{type:String , required:true} ,
    paymentResult:{
        id:String, status:String, update_time:String, email_address:String
    },
    itemsPrice:{type:Number , required:true , default:0},
    isPaid:{type:Boolean , required:true,default:false},
    paidAt:{type:Date},
    isDeliverd:{type:Boolean , required:true,default:false},
    deliverAt:{type:Date},
    status:{type:String , required:true},
},{timestamps:true})

const Order = mongoose.model("orders",ordersSchema)
export default Orders