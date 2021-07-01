const Post = require('../models/PostModel');
const categoryM = require('../models/CategoryModel');
const lib = require('../config/lib.js')

const conversation = require('../models/Conversation');
const UserM = require('../models/userModel');

module.exports = {
    index: (req,res) => {
        //console.log(req.user);
        res.render('admin/index', {user:req.user});
    },
    getPosts: (req,res) => {
        Post.find()
        .populate('category','title')  
        .then(posts => {
            
            res.render('admin/posts/view-posts', {posts:posts,user:req.user});
        });
    },
    submitPosts: (req,res) => {
        let commentsAllowed = "";
       // console.log(req.body);
        if(req.body.checkBox == 'on'){
            commentsAllowed = true;
        }else if(req.body.checkBox == "off"){
            commentsAllowed = false;
            
        }
        /* const commentsAllowed = req.body.allowcomments ? true:false; */
        const newPost = new Post({
            title: req.body.title,
            status: req.body.status,
            description: req.body.description,
            allowComments: commentsAllowed,
            category:req.body.category,
        });

        try{
            newPost.save()
            .then(post => {
                    console.log(post);
                    res.send('submitted');
                    res.redirect('/admin/posts/create-posts');
                })
        }catch(err){ 
            console.log('database error');
        };
 
    },
    createPosts: (req,res) => {
        categoryM.find()
        .then(cats => {
            res.render('admin/posts/create', {categories:cats,user:req.user});
        })
    },

    editPosts: (req,res) => {
        const id = req.params.id;

        Post.findById(id)
            .then(post => {

                categoryM.find().then(cats => {
                    res.render('admin/posts/edit', {post:post, categories:cats,user:req.user});
                })
            
        });
    },

    updatePost: (req,res) => {
        let commentsAllowed = "";
       // console.log(req.body);
        if(req.body.checkBox == 'on'){
            commentsAllowed = true;
        }else if(req.body.checkBox == "off"){
            commentsAllowed = false;
        }
        const id = req.params.id;
        Post.findById(id)
        .then(post => {
            post.title = req.body.title;
            post.status = req.body.status;
            post.allowComments = commentsAllowed;
            post.category = req.body.category;
            post.description = req.body.description;

            post.save().then(updatePost => {
                res.status(200).send('Post Updated');
            })
        })

    },

    deletePost : (req,res) => {
        Post.findByIdAndDelete(req.params.id)
            .then( deletedPost => {
                res.send('Post deleted successfully');
            });
        },

    getCategories: (req,res) => {
            categoryM.find()
            .then(cat => {
                res.render('admin/category/index', {categories:cat,user:req.user});
            });
                
            },

    addCategory: (req,res) => {
        let categoryName = req.body.category;
        if(categoryName){
            const CategoryTable = new categoryM({
                title:categoryName,
            });
            CategoryTable.save()
            .then(category => {
                res.status(200).json(category);
            });
        }
    },

    uploadImgPage: (req,res) => {
        Post.find()
        .then(posts => {
        res.render('admin/imgupload', {posts:posts,user:req.user});
        })
    },

    allFriendsPage: (req,res) => {
        UserM.find({'email':{$ne:req.user.email}})
        .then(users => {
        res.render('admin/all-friend', {users:users,user:req.user});
        })
    },
    uploadFile :(req,res) => {
        let filename = "";
        //if(!lib.isEmpty(req.files)){
            let file = req.files.uploadedFile;
             filename = file.name;
            let uploadDIR = './public/uploads/';
            let postID = req.body.post;
            
        console.log(postID);
            file.mv(uploadDIR+filename, (err) => {
                if(err){
                throw err;
                }
            });
        //}

        

        Post.findById(postID)
        .then(post => {
            console.log(post)
            post.file = filename;
            post.save().then(uploaded => {
                res.send('File Uploaded');
            });
        }).catch(err => {
            console.log(err);
        })

        
    },
    privateChat:(req,res) => {
        //console.log(req.user)
        let reciever = req.params.id;
        
        UserM.findById(reciever)
            .then(recieve => {
                //console.log(recieve.email);
                conversation.find({'participants.0' : req.user.email,'participants.1':recieve.email},(err,chat) => {
                    if (Array.isArray(chat) === true && chat.length == 0) {
                        conversation.find({'participants.0':recieve.email,'participants.1' : req.user.email}, (err, chat) => {
                            //let chatId = chat[0]._id;
                            //console.log(chatId);
                           if(Array.isArray(chat) === true && chat.length == 0){
                                res.render('admin/chat',{reciever:recieve,user:req.user.email,chatId:''});
                                

                            }else{
                                let chatId = chat[0]._id;
                                //console.log(chatId);
                                res.render('admin/chat',{reciever:recieve,user:req.user.email,chatId:chatId});

                            }
                        })
                    }else{
                        let chatId = chat[0]._id;
                        //console.log(chatId);
                            res.render('admin/chat',{reciever:recieve,user:req.user.email, chatId:chatId});

                    }
                })
    
            })
    }



}