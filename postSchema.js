const {Schema,model}=require('mongoose')

let postSchema=new Schema({
    post:{
        type:String,
        required:true
    },
    posted_by:{
        type:String,
        required:true
    },
    post_desc:{
        type:String,
        required:true
    }
})

module.exports=model("postApp",postSchema)