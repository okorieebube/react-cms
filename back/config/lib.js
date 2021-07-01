const  express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UserM = require('../models/userModel');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const lib = {
    selectOptions : function(status, options) {
        return options.fn(this).replace(
            new RegExp('value=\"'+status+'\"'),
             '$&selected="selected"');
    },

    isEmpty: function(obj) {
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
    },
    registration: function(reqBody){
        let errors = [];
        if(!reqBody.firstName){
            errors.push({message:'Enter your firstname'});
        }else if(!reqBody.lastName){
            errors.push({message: 'Enter last name'});
        }else if( !reqBody.email){
            errors.push({message: 'Enter Your email'});
        }else if( !reqBody.password){
            errors.push({message: 'Enter Your Password'});

        }

        if(reqBody.password !== reqBody.password_confirmation){
            errors.push({message: 'Passwords do not match'});
        }

        if(errors.length > 0){
            /* res.render('default/register', {errors:errors}) */
            console.log(errors);
            return errors;
        }else{
            UserM.findOne({email: reqBody.email}).then(user => {
                if (user) {
                    
            errors.push({message: 'This email already exists'});
            return errors;
                    //req.send('This email already exists');
                } else{
                    console.log(reqBody);
                    const newUser = new UserM(reqBody);
                    /* console.log(newUser);
                    return; */
                    bcrypt.genSalt(10, (err,salt) => {
                        bcrypt.hash(newUser.password, salt, (err,hash)=> {
                            newUser.password = hash;
                            console.log(newUser);
                            newUser.save().then(user => {
                                return 200;
                            })
                        })
                    });
                    
                }
            });
        }
        
    },

    jwtAuth:function(req,res,next){
        //req.header('x-auth-token')
        const token = req.params.access;

        if(!token) res.status(401).json({msg:'No Token, authorization denied'});

        try{
            //verify token
            const decoded = jwt.verify(token, config.jwtSecret);
            console.log(decoded.exp);
            /* if (decoded.exp <= Date.now()) {
                res.end('Access token has expired', 400);
            } */

            //add user from payload
            req.user = decoded;
            next();

        }catch(e){
            console.log(e);
            res.status(400).json({msg:'Token is not valid'});
        }
    },

    isUserAuthenticated: (req,res,next)=> {
        if(req.isAuthenticated()){
            next();
        }else{
            res.redirect('/login');
        }
    },

    


};

module.exports = lib;