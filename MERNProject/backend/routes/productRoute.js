import express from "express";
import { addProduct, addProductReview, fetchAllProducts, fetchNewProducts, fetchProductById, fetchProducts, fetchTopProducts, filterProducts, removeProduct, updateProductDetails } from "../controllers/productController.js";
import { authenticate, authorizedAdmin } from "../middleware/auth.js";
import formidable from "express-formidable";
import checkId from "../middleware/checkId.js";
const router = express.Router()

router.route('/')
.get(fetchProducts)
.post(authenticate,authorizedAdmin ,  formidable(),addProduct)

router.get('/allproducts',fetchAllProducts)
router.get('/new',fetchNewProducts)
router.get("/top", fetchTopProducts);

router.route("/:id")
    .get(fetchProductById)
    .put(authenticate,authorizedAdmin,formidable(), updateProductDetails)
    .delete(authenticate,authorizedAdmin,removeProduct)

    router.route("/filtered-products").post(filterProducts);
    router.post('/:id/reviews',authenticate,checkId,addProductReview)
export default router