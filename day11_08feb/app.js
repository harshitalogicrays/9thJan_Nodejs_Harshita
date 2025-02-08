import express from 'express'
import 'dotenv/config'
import userRouter from './routes/user.js'
import productRouter from './routes/products.js'
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
//base url
app.use('/',userRouter)
app.use('/product',productRouter)


app.listen(PORT,()=>console.log(`server started at http://localhost:${PORT}`))