const postSchema=require('../model/postSchema')

exports.createPost=async(req,res)=>{
    let payload={
        post:req.file.path, 
        posted_by:req.body.posted_by,
        post_desc:req.body.post_desc
    }
    await postSchema.create(payload)
    res.json({success:true, message:"Post Created Successfully"})
}

exports.allPosts=async(req,res)=>{
    let payload=await postSchema.find()
    res.json({success:true, message:"Posts fetched Successfully",payload})
}

exports.singlePost=async(req,res)=>{
    let payload=await postSchema.findOne({_id:req.params.id})
    res.json({success:true, message:"Single Post fetched Successfully",payload})
}

exports.updatePost=async(req,res)=>{
    let post=req.file.path
    let data=req.body
    let payload=await postSchema.updateOne({_id:req.params.id},{$set:{post, ...data}})
    res.json({success:true, message:"Post updated Successfully",payload})
}

exports.deletePost=async(req,res)=>{
    let payload=await postSchema.deleteOne({_id:req.params.id})
    res.json({success:true, message:"Post deleted Successfully",payload})
}



// userSchema.js 
// username
// password

// userController.js
// register

// userRoutes.js
// /register