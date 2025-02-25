import mongoose, { Schema } from "mongoose";

const formSchema = new Schema({
    username: {type:String , default:"Ram"} ,
    email : {type:String , unique:true , required:[true,"email is required"] ,
        validate: {
            validator: function(v) {
              return /^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/.test(v);
            },
            message: props => `${props.value} is an invalid email `
          },
    },
    password: {type:String  , required:true},
    cpassword: String,
    gender:{type:String , enum:["male","Female","other"]}
} ,  { timestamps: true })

const Form = mongoose.model("user",formSchema) // users collection 
export default Form