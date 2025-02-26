import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const PORT = process.env.PORT || 5000 

import userRoutes from  './routes/userRoute.js'
import categoryRoutes from  './routes/categoryRoute.js'
import productRoutes from  './routes/productRoute.js'
import orderRoutes from  './routes/OrderRoute.js'

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/users',userRoutes)
app.use('/category',categoryRoutes)
app.use('/products',productRoutes)
app.use('/orders',orderRoutes)

app.listen(PORT , ()=>console.log(`server started at http://localhost:${PORT}`))