const Router=require('express');
const { createPost, allPosts, singlePost, deletePost, updatePost } = require('../controller/postController');
const upload=require('../config/multer')
const router=Router()

router.post('/post',upload.single('post'),createPost)
router.get('/post',allPosts)
router.get('/post/:id',singlePost)
router.put('/post/:id',upload.single('post'),updatePost)
router.delete('/post/:id',deletePost)

module.exports=router;