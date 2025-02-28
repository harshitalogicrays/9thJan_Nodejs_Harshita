import express from "express";
import { addProduct, fetchAllProducts, fetchNewProducts, fetchProductById, fetchProducts, fetchTopProducts, filterProducts, removeProduct, updateProductDetails } from "../controllers/productController";
import { authenticate, authorizedAdmin } from "../middleware/auth";
import formidable from "express-formidable";
const router = express.Router()

router.route('/')
.get(fetchProducts)
.post(authenticate,authorizedAdmin ,  formidable(),addProduct)

router.get('/allproducts',fetchAllProducts)
router.get('/new',fetchNewProducts)

router.route("/:id")
    .get(fetchProductById)
    .put(authenticate,authorizedAdmin,formidable(), updateProductDetails)
    .delete(authenticate,authorizedAdmin,removeProduct)


export default router