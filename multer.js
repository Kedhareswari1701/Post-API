const multer=require('multer')

let photo=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname)
    }
})

let upload=multer({storage:photo})
module.exports=upload;