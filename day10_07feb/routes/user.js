import express from 'express'
const router = express.Router()
import path from 'path'
//http://localhost:1000
router.get('/',(req,res)=>{
    res.send("users get request") })

router.get('/index',(req,res)=>{
    let __dirname = path.resolve()
    res.sendFile(path.join(__dirname,'public','index.html')) })

router.get('/user/:id',(req,res)=>{
    res.json({data:req.params})})
export default router