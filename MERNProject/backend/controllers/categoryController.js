import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categorySchema.js";

export const createCategory = asyncHandler(async(req,res)=>{
    try{
    const {name,description=''} =  req.body
    if(!name){
        return res.json({error:"name is required"})
    }
    const categoryExists  =  await Category.findOne({name})
    if(categoryExists) {
        return res.json({error:"category already exists"})
    }
    const category = await new Category({name,description}).save()
    res.json(category)
    }
    catch(error){
        return res.status(400).json(error)
    }
})

export const updateCategory = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const {name,description=''} =  req.body
        const category = await Category.findOne({_id:id})
        if(!category){
            return res.json(404).json({error:"category not found"})
        }
        category.name = name || category.name
        category.description = description || category.description
        const updateCategory = await category.save()
        res.json(updateCategory)
    }
    catch(error){
        return res.status(400).json(error)
    }
})

export const removeCategory = asyncHandler(async(req,res)=>{
    try{
        const removeCategory = await Category.deleteOne({_id:req.params.id})
        res.json(removeCategory)   
    }
    catch(error){
        return res.status(400).json(error)
    }
})

export const listCategory = asyncHandler(async(req,res)=>{
    try{
        const categories = await Category.find()
        res.json(categories) 
    }
    catch(error){
        return res.status(400).json(error)
    }
})

export const fetchCategory = asyncHandler(async(req,res)=>{
    try{
        const category = await Category.findOne({_id:req.params.id})
        res.json(category) 
    }
    catch(error){
        return res.status(400).json(error)
    }
})

