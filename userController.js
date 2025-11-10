const userSchema=require('../model/userSchema')

exports.registerUser=async(req,res)=>{
  await userSchema.create(req.body)
  res.json({success:true, message:"Successfully user registered"})
  
}

exports.loginUser=async(req,res)=>{
  const {username,password}=req.body;
  if(!username || !password){
    res.status(401).json({success:false, message:"username or password is missing"})
  }else{
    let user=await userSchema.findOne({username}).select("+password")
    // console.log(user);
    if(!user){
      res.status(401).json({success:false, message:"user not found"})
    }else{
      let isMatch=await user.comparePasswords(password)
      if(!isMatch){
         res.status(401).json({success:false,message:"Password is not matching"})
      }
      else{
        let token=await user.generateToken();
        res.status(200).json({success:true, message:"login successful",token})
      }
    }
  }
}