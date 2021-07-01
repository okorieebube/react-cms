const Post = require('../models/PostModel');
const categoryM = require('../models/CategoryModel');
const UserM = require('../models/userModel');
const bcrypt = require('bcryptjs');
const lib = require('../config/lib');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = {
    index: async (req, res) => {
        const posts = await Post.find();
        const cats = await categoryM.find();
        //console.log(req.user);
        res.render('default/index', { posts: posts, cats: cats, user: req.user });

    },
    loginGet: (req, res) => {
        res.render('default/login', { user: req.user });
    },
    jwtLoginPost: (req, res) => {
        //res.send('Submitted successfully');

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields.' });
        };
        //Check for existng User
        UserM.findOne({
            email,
        }).then((user) => {
            if (!user) {
                return res.status(400).json({ msg: 'User does not exist' });
            }

            //validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

                    jwt.sign(
                        { id: user.id },
                        config.jwtSecret,
                        { expiresIn: '60m' },
                        (err, token) => {
                            if (err) throw err;
                            //console.log(token);
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.firstName,
                                    lastName: user.lastName,
                                    email: user.email,
                                }
                            });
                            /* res.redirect('/admin/') */;
                        }

                    );
                });

        });
    },

    loginPost: (req, res) => {

    },

    registerGet: (req, res) => {

        res.render('default/register', { user: req.user });
    },

    registerPost: (req, res) => {
        
        // res.json({ errors: res.body })

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // res.json('Registration Successful');

        let errors = [];
        if (!req.body.firstName) {
            errors.push({ message: 'Enter your firstname' });
        } else if (!req.body.lastName) {
            errors.push({ message: 'Enter last name' });
        } else if (!req.body.email) {
            errors.push({ message: 'Enter Your email' });
        } else if (!req.body.password) {
            errors.push({ message: 'Enter Your Password' });

        }

        if (req.body.password !== req.body.password_confirmation) {
            errors.push({ message: 'Passwords do not match' });
        }

        if (errors.length > 0) {
            res.json({ errors: errors })
        } else {
            UserM.findOne({ email: req.body.email })
                .then(user => {
                    if (user) {
                        res.json({errors:[{message:'This email already exists'}]});
                    } else {
                        const newUser = new UserM(req.body);

                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => {
                                        res.json({errors:[{message:'Registration Successful'}]});
                                    })
                            })
                        })

                    }
                });
        }
    },

    portfolio: (req, res) => {
        res.render('default/portfolio', { user: req.user });
    },
}