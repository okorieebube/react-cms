const express = require('express');
const router = express.Router();
const defaultControllers = require('../../controllers/defaultController');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcryptjs = require('bcryptjs');
const config = require('../../config/config')
//const jwt = require('jsonwebtoken');
//const mongoose = require('mongoose');
const UserM = require('../../models/userModel');




router.all('/*', (req,res,next) => {
    req.app.locals.layout = 'default';
    
    next();
});

router.route('/')
    .get(defaultControllers.index );

    

//Defining local strategy
passport.use('local',new localStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
},
    function(req,email,password,done){
        if(!email && !password){
            // console.log('Enter email and password');
            return done(null,false, {errMsg:'Enter email and password'})
        };
        //console.log(username+' '+password);
    UserM.findOne({email:email}).then((user) => {
        //console.log(user);
        if(!user){
             return done(null, false, {errMsg:'Sorry, User not found'})
            };

        bcryptjs.compare(password, user.password, (err, passwordMatched) => {
            //console.log(passwordMatched);
            if(err) return err;
            if(!passwordMatched){ 
                return done(null, false,{errMsg:'Incorrect Password'})
            };

            return  done(null, user);
        })
    });
}));

passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser(function(id,done){
    UserM.findById(id, function(err,user){
        done(err,user);
    });
});


router.route('/login')
    .get(defaultControllers.loginGet)
    .post((req,res,next) => {
        // console.log(req.body);
        passport.authenticate('local',function(err,user,info){
            //console.log('err');
            if(err) {
                console.log(err);
                return next(err)
            };
            if(!user) {
                //console.log(info);
                const errM = info;
                return res.render('default/login',{info:info});
            };
            req.login(user,(err => {
                if(err){
                    console.log(err);
                    return next(err);
                }
                return res.redirect('/admin/');
            }))
        })(req,res,next);
    });

router.route('/register')
    .get(defaultControllers.registerGet)
    .post(defaultControllers.registerPost);

router.route('/portfolio')
    .get(defaultControllers.portfolio);









module.exports = router;