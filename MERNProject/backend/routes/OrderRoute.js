import express from "express";
import { authenticate, authorizedAdmin } from "../middleware/auth";
import { calculateTotalSales, countTotalOrders, createOrder, findOrderById, getAllOrders, getUserOrders, markOrderAsPaid } from "../controllers/orderController";
const router = express.Router()

router.route('/')
        .post(authenticate , createOrder)
        .get(authenticate,authorizedAdmin,getAllOrders)

router.get('/userorders',authenticate,getUserOrders)
router.get('/totalorders',countTotalOrders)
router.get('/totalsales',calculateTotalSales)
router.get('/:id',authenticate ,findOrderById)

router.put('/:id/pay',authenticate ,markOrderAsPaid)

router.put('/:id/deliver',authenticate ,authorizedAdmin,markOrderAsPaid)

export default router