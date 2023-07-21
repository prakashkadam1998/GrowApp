const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

// router.get('/',(req,res)=>{
//     res.send('Get route called');
// })

router
.get('/latestposts/:id',userController.getLatestPost)
.get('/:userid',userController.selectRecordById) 
.post('/signup',userController.signUp)
.post('/login',userController.logIn)
.put('/addpost/:id',userController.addPost)
.get('/posts/:id',userController.getPostsById)
.delete('/posts/:userid/:postid',userController.deletePostById)
.put('/posts/:userid/:postid',userController.updatePostById)

module.exports = router;