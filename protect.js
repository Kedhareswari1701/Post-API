const jwt=require('jsonwebtoken')
const userSchema=require('../model/userSchema')

exports.Protect = (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1]
        // console.log(token)
        try {
            if(!token){
                res.status(401).json({success:false, message:"Token is empty"})
            }
            const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
            req.user=userSchema.findById(decoded.id)
            console.log(req.user)
            next();
        } catch (error) {
            res.status(401).json({success:false, message:"Invalid Token",error})
        }
    }else{
         res.status(401).json({success:false, message:"Token is Required"})
    }
}