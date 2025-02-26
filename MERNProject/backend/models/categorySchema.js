import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxLength:40,
        unqiue:true
    },
    description:{type:String}
})

const Category = mongoose.model("category",categorySchema)
export default Category
