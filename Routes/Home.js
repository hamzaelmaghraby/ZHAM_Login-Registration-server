const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../User_schema/register_schema');

// DB URL
const uri = "mongodb+srv://hamzama:2552@cluster0.asqxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// update specific post 

router.patch('/:postid', async(req,res) =>{
    //DB connection
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));  
    try{
        const posts = await Post.updateOne({_id : req.params.postid}, {$set: {title: req.body.title}});
        res.json(posts);
    } catch (err) {
        res.json({message : err});       
    }
})

module.exports = router;