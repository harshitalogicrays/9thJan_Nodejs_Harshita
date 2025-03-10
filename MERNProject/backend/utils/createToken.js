import jwt from 'jsonwebtoken'
import 'dotenv/config'
const generateToken = (res ,  userId)=>{
    const token =  jwt.sign({userId},process.env.JWT_SECRET ,{
        expiresIn:"30d"
    })

    res.cookie("jwt",token,{
        httpOnly:true,
        secure:process.env.NODE_ENV != 'developement',
        sameSite:"strict",
        maxAge:1000*60*60*24*30
    })
    return token
}

export default generateToken