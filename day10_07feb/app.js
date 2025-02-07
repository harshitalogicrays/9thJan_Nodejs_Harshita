import express from 'express'
import 'dotenv/config'
import path from 'path'
import userRouter from './routes/user.js'
import productRouter from './routes/products.js'

const PORT = process.env.PORT || 3000

const app =express()
app.use(express.json())

/*app.get('/',(req,res)=>{
    // res.send("hello");
    // res.sendFile('D://9thJan_Nodejs_Harshita/day10_07feb/public/index.html')
    let __dirname = path.resolve()
    res.sendFile(path.join(__dirname,'public','index.html'))
}) */

//http://localhost:1000
app.use('/',userRouter)
//http://localhost:1000/product
app.use('/product',productRouter)

app.all('*',(req,res)=>{
    res.send("page not found")
})
app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))