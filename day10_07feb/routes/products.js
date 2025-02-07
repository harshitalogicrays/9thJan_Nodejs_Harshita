import express from 'express'
import { getproductname, getProducts } from '../controller/products.js'
const router = express.Router()
//http://localhost:1000/product
router.get('/',getProducts)
router.get('/:name([a-z]+)',getproductname)

export default router