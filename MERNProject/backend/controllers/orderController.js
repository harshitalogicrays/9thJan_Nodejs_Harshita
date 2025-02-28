import asyncHandler from "express-async-handler.js";
import Order from "../models/ordersSchema.js";

export const createOrder = asyncHandler(async(req,res)=>{})

export const getAllOrders = asyncHandler(async(req,res)=>{
    try {
        const orders = await Order.find({}).populate("user", "id username");
        res.json(orders);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
export const getUserOrders = asyncHandler(async(req,res)=>{
    try {
        const orders = await Order.find({ user: req.user._id });
        res.json(orders);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
export const countTotalOrders = asyncHandler(async(req,res)=>{
    try {
        const totalOrders = await Order.countDocuments();
        res.json({ totalOrders });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
export const calculateTotalSales = asyncHandler(async(req,res)=>{
    try {
        const orders = await Order.find();
        const totalSales = orders.reduce((sum, order) => sum + order.totalPrice, 0);
        res.json({ totalSales });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})

export const findOrderById = asyncHandler(async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id).populate( "user",  "username email" );
    
        if (order) {
          res.json(order);
        } else {
          res.status(404);
          throw new Error("Order not found");
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
export const markOrderAsPaid = asyncHandler(async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
    
        if (order) {
          order.isPaid = true;
          order.paidAt = Date.now();
          order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.payer.email_address,
          };
    
          const updateOrder = await order.save();
          res.status(200).json(updateOrder);
        } else {
          res.status(404);
          throw new Error("Order not found");
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})
export const markOrderAsDelivered = asyncHandler(async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
    
        if (order) {
          order.isDelivered = true;
          order.deliveredAt = Date.now();
    
          const updatedOrder = await order.save();
          res.json(updatedOrder);
        } else {
          res.status(404);
          throw new Error("Order not found");
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
})






