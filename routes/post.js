const express = require ("express"); 

const router = express.Router();
require('../models/Post');
const mongoose = require("mongoose");

//GET BACK ALL THE POST

const modelUser = mongoose.model('test')
router.get('/',async(req,res) =>{
    try{
        const posts = await modelUser.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }

});

//SUBMIT A POST

router.post('/',async(req,res)=>{
    const newUser =new modelUser({
        title:req.body.title,
        description:req.body.description
    });
    try{
    const savedPost =await newUser.save()
    
    console.log(savedPost)
    res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }


});
//SPECIFIC POST
router.get('/all/:postId',async(req,res)=>{
    try{
    const post= await modelUser.findById(req.params.postId)
    res.json(post)}
    catch(err){
        res.json(err);
        console.log(err)
    }
});

//DELETE POST
router.delete('/delete/:postId',async(req,res)=>{
    try{
    const removedPost= await modelUser.remove({ _id:req.params.postId});
    res.json(removedPost);
    }catch(err){
        res.json(err);
        console.log(err);
    }
});

//UPDATE POST
router.patch('/:postId',async(req,res)=>{
    try{
    const updatedPost= await modelUser.update({ _id:req.params.postId},
        {$set:{title:req.body.title}});
    res.json(updatedPost);
    // res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;