import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

export const addProduct =  asyncHandler(async(req,res)=>{
    try{
    const {name,price,description='',category,quantity,brand,countInStock} =  req.fields
    switch(true){
        case !name: return res.json({error:"Name is required"})
        case !price: return res.json({error:"price is required"})
        case !brand: return res.json({error:"brand is required"})
        case !category: return res.json({error:"category is required"})
        case !quantity: return res.json({error:"quantity is required"})
        case !countInStock: return res.json({error:"countInStock is required"})
    }

    const product = new Product({...req.fields})
    await product.save()
    res.json(product)
    }
    catch(error){
        res.status(400).json(error.message)   
    }
})
export const fetchProducts =  asyncHandler(async(req,res)=>{
    try{
        const pageSize = 5
        const keyword = req.query.keyword ? {
            name: {
                $regex:req.query.keyword,
                $options:"i"
            }
        } :{} 

        const count =  await Product.countDocuments({...keyword}) 
        const products =  await Product.find({...keyword}).limit(pageSize)
        res.json({
            products,
            page:1,
            pages:Math.ceil(count/pageSize),
            hasMore:false
        })
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})

export const fetchProductById =  asyncHandler(async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        if(product)return res.json(product)
        else {res.status(404); throw new Error('product not found')}
    }
    catch(error){res.status(404).json({error:"product not found"})}
})

export const fetchNewProducts =  asyncHandler(async(req,res)=>{
    try{
        const products =  await Product.find().sort({_id:-1}).limit(5)
        res.json(products)
    }
    catch(error){res.status(400).json(error.message)}
})

export const updateProductDetails =  asyncHandler(async(req,res)=>{
    try{
        const {name,price,description='',category,quantity,brand,countInStock} =  req.fields
        switch(true){
            case !name: return res.json({error:"Name is required"})
            case !price: return res.json({error:"price is required"})
            case !brand: return res.json({error:"brand is required"})
            case !category: return res.json({error:"category is required"})
            case !quantity: return res.json({error:"quantity is required"})
            case !countInStock: return res.json({error:"countInStock is required"})
        }
   
        const product = await Product.findByIdAndUpdate(req.params.id,{...req.fields},{new:true})
        await product.save()
        res.json(product)
        }
        catch(error){
            res.status(400).json(error.message)   
        }
})
export const removeProduct =  asyncHandler(async(req,res)=>{
    try{
        const product =  await Product.findByIdAndDelete(req.params.id)
        res.json(product)
    }
    catch(error){res.status(500).json({error:error.message})}
})

export const fetchAllProducts =  asyncHandler(async(req,res)=>{
    try{
        const products = await Product.find()
                        .populate("category")
                        .limit(10).sort({createdAt:-1})
        return res.json(products)
          }
    catch(error){res.status(404).json({error:"products not found"})}
})


export const fetchTopProducts = asyncHandler(async (req, res) => {
    try {
      const products = await Product.find({}).sort({ rating: -1 }).limit(4);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(400).json(error.message);
    }
  });

export const filterProducts = asyncHandler(async (req, res) => {
    try {
      const { checked, radio } = req.body;
  
      let args = {};
      if (checked.length > 0) args.category = checked;
      if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
  
      const products = await Product.find(args);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server Error" });
    }
  });

export const addProductReview = asyncHandler(async(req,res)=>{
    try {
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);
    
        if (product) {
          const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
          );
    
          if (alreadyReviewed) {
            res.status(400);
            throw new Error("Product already reviewed");
          }
    
          const review = {
            name: req.user.username,
            rating: Number(rating),
            comment,
            user: req.user._id,
          };
    
          product.reviews.push(review);
    
          product.numReviews = product.reviews.length;
    
          product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;
    
          await product.save();
          res.status(201).json({ message: "Review added" });
        } else {
          res.status(404);
          throw new Error("Product not found");
        }
      } catch (error) {
        console.error(error);
        res.status(400).json(error.message);
      }
})