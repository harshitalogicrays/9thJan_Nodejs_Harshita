import express from "express";
import { authenticate, authorizedAdmin } from "../middleware/auth.js";
import { createCategory, fetchCategory, listCategory, removeCategory, updateCategory } from "../controllers/categoryController.js";
const router = express.Router()

router.route("/").post(authenticate, authorizedAdmin, createCategory);
router.route("/:id").put(authenticate, authorizedAdmin, updateCategory);
router.route("/:id").delete(authenticate, authorizedAdmin, removeCategory);
router.route("/categories").get(listCategory);
router.route("/:id").get(fetchCategory);

export default router