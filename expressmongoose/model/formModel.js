import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
    username: String ,
    email : {type:String , unique:true},
    password: String ,
    cpassword: String
} ,  { timestamps: true })

const Form = mongoose.model("user",formSchema) // users collection 
export default Form