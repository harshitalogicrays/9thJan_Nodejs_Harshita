import asyncHandler from "../middleware/asyncHandler.js"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";

export const createUser = asyncHandler(async(req,res)=>{
    const {username,email,password} =  req.body
    if(!username || !email || !password){
        throw new Error("please fill all the fields")
    }

    const userExists = await User.findOne({email})
    if(userExists){res.status(400).send("User already exists")}

    const salt =await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(password, salt);

    const user = new User({username,email,password:hashedPassword})
    try{
        await user.save()
        createToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            username:user.username,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }
    catch(err){
        res.status(400)
        throw new Error("Invalid User data")
    }
})


export const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const userExists=await User.findOne({email})
    if(userExists){
        const isPwdValid  = await bcrypt.compare(password , userExists.password)
        if(isPwdValid){
            createToken(res,userExists._id)
            res.status(201).json({
                _id:userExists._id,
                username:userExists.username,
                email:userExists.email,
                isAdmin:userExists.isAdmin
            })
        }
        else { throw new Error("Invalid  Credentails")}
    }
    else { throw new Error("Invalid  Credentails")}
})

export const logoutCurrentUser =asyncHandler(async(req,res)=>{
    res.cookie("jwt","",{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:"LoggedOut Successfully"})
})

export const getAllUsers = asyncHandler(async(req,res)=>{
    const users =  await User.find()
    res.json(users)
})

export const getCurrentUserProfile = asyncHandler(async(req,res)=>{
    // console.log(req.user)
    const user =  await User.findById(req.user._id)
    if(user){
        res.json({_id:user._id,username:user.username,email:user.email})
    }
    else {res.status(404);throw new Error("User not found")}
})

export const updateCurrentUserProfile = asyncHandler(async(req,res)=>{
    const user =  await User.findById(req.user._id)
    if(user){
        user.username = req.body.username || user.username
        user.email =  req.body.email || user.email
        if(req.body.password){
            const salt =await bcrypt.genSalt(10);
            const hashedPassword =await bcrypt.hash(req.body.password, salt);
            user.password =  hashedPassword
        }
        const updateUser = await user.save();
        res.json({
            _id:updateUser._id,
            username:updateUser.username,
            email:updateUser.email,
            isAdmin:updateUser.isAdmin
        })
    }
    else{
        res.status(404);throw new Error("User not found")
    }
})
export const deleteUserById = asyncHandler(async(req,res)=>{
    const user = await User.findOne(req.params._id)
    if(user){
        if(user.isAdmin){
            res.status(400);
            throw new Error("cannot delete admin")
        }
        await User.deleteOne({_id:user._id})
        res.json({message:"user deleted"})
    }
    else {
        res.status(404);throw new Error("User not found")
    }
})
export const getUserById =asyncHandler(async(req,res)=>{
    const user = await User.findOne(req.params._id)
    if(user){res.json(user)}
    else {  res.status(404);throw new Error("User not found")}
})

export const updateUserById = asyncHandler(async(req,res)=>{
    const user = await User.findOne(req.params._id)
    if(user){
        user.username = req.body.username || user.username
        user.email =  req.body.email || user.email
        user.isAdmin = Boolean(req.body.isAdmin);
        const updateUser = await user.save();
        res.json({
            _id:updateUser._id,
            username:updateUser.username,
            email:updateUser.email,
            isAdmin:updateUser.isAdmin
        })
    } else{
        res.status(404);throw new Error("User not found")
    }
})





