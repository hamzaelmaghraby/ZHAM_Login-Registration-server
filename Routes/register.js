const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../User_schema/register_schema');

// DB URL
const uri = "mongodb+srv://hamzama:2552@cluster0.asqxg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




// submit posts

router.post('/', async (req,res) => {
    // db connection
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true},
        () => console.log('connected to db'));  
     

    //search if the email already exsists
    const search = await User.findOne({Email: req.body.Email});
    if(search) return res.status(400).send({body : 'email already exists'});

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.Password, salt);


    // creat new user
    const user = new User({
            Firstname: req.body.Firstname,
            Middlename: req.body.Middlename,
            Lastname: req.body.Lastname,
            Email : req.body.Email,
            Password : hashedpassword,
            Phone : req.body.Phone,
            Birthdate: req.body.Birthdate,
            Gender: req.body.Gender,
            CardNumber: req.CardNumber,
            State: req.body.State
        });
    try{
    const savedpost =await user.save();
    res.status(201).send({body : 'user created successfully'});
    }catch(err){
        res.status(500).send({message : err});
    }
});

module.exports = router;
