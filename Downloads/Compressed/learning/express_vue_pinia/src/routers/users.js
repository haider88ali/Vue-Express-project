const express = require('express');
const router = new express.Router();
const User = require("../models/User");

router.post('/users',async(req,res) => {
    try{
        const user = new User(req.body);
        const createUser= await user.save();
        res.status(200).send(createUser);

    }catch(err){
        res.status(400).send(err);
    }

});
router.get('/users',async(req,res) => {
    try{
        const createUser= await User.find();
        res.status(200).send(createUser);

    }catch(err){
        res.status(400).send(err);
    }

});
module.exports = router;