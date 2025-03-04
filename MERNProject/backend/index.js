import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import path from 'path'

const PORT = process.env.PORT || 5000 

import userRoutes from  './routes/userRoute.js'
import categoryRoutes from  './routes/categoryRoute.js'
import productRoutes from  './routes/productRoute.js'
import orderRoutes from  './routes/OrderRoute.js'
import uploadRoutes from "./routes/uploadRoute.js";
import connectDB from './config/connectDB.js'

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

connectDB(process.env.DB_URL)

app.use('/users',userRoutes)
app.use('/category',categoryRoutes)
app.use('/products',productRoutes)
app.use('/orders',orderRoutes)
app.use("/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(PORT , ()=>console.log(`server started at http://localhost:${PORT}`))