const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../User_schema/register_schema');

// DB URL
const uri = "mongodb+srv://hamzama:2552@cluster0.asqxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Find User In DB

router.post('/', async (req,res) =>{
    //DB connection
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));  
     
    try{
        // search for user email in DB 
        const user = await User.findOne({Email: req.body.Email});
        if(!user)   return res.status(401).send({body: 'wrong credentials'});
        const validpassword = await bcrypt.compare(req.body.Password, user.Password);
    
        if(!validpassword){
            res.status(401).send({body: 'wrong credentials'});
            
        }else{
           
            res.status(200).send({body: 'logged in'})
            
        }
        
    }catch(err){
        res.status(500).send({message : err});
       
        }
});

module.exports = router;
