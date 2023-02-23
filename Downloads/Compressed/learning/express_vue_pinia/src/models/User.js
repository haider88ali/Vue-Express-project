const mongoose = require('mongoose');
const validator = require('validator');


const Userssmogoose=new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength:3,
    },
    email:{
        type:String,
        required: true,
        unique:[true,"Email is already exist"],
        validate(value)
        {
            if(!validator.isEmail(value))
            {
               throw new Error('invalid Email');
            }
        }
    },
    password: {
        type:String,
        min:10,
        required: true,
        unique:true,
    },

})
// we will create a new model


const User=new mongoose.model('user',Userssmogoose);
module.exports = User;