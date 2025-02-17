import express from 'express'
import 'dotenv/config'
import userRouter from './routes/user.js'
import productRouter from './routes/products.js'
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
//base url
app.get('/middlewaredemo',(req,res,next)=>{
    console.log("middlwaredemo called")
    next()
}, (req,res)=>res.send("hello from server after middlware calling"))


const fun1 = (req,res,next)=>{
    console.log("fun1 called")
    next()
}
const fun2 = (req,res,next)=>{
    console.log("fun2 called")
    throw new Error("something went wrong")
    // next()
}
const fun3 = (req,res,next)=>{
    console.log("fun3 called")
    next()
}

app.get('/middlewaredemo1',[fun1,fun2,fun3],(req,res)=>{res.send("middleware demo1")})

app.use('/',userRouter)
app.use('/product',productRouter)



app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))