const express = require('express');
const router = express.Router();
const adminControllers = require('../../controllers/adminControllers');
const passport = require('passport');
const {isUserAuthenticated} = require('../../config/lib')

const UserM = require('../../models/userModel');

router.all('/*',isUserAuthenticated, (req,res,next) => {
    req.app.locals.layout = 'admin';

    next();
})


router.route('/')
    .get(adminControllers.index);

router.route('/posts/view-posts')
    .get(adminControllers.getPosts);

router.route('/posts/create-posts')
    .get(adminControllers.createPosts)
    .post(adminControllers.submitPosts);

router.route('/posts/edit/:id')
    .get(adminControllers.editPosts)
    .post(adminControllers.updatePost);

router.route('/posts/delete/:id')
    .post(adminControllers.deletePost);

router.route('/category')
    .get(adminControllers.getCategories)
    .post(adminControllers.addCategory);

router.route('/imgupload')
    .get(adminControllers.uploadImgPage)
    .post(adminControllers.uploadFile);

router.route('/all-friends')
        .get(adminControllers.allFriendsPage);
router.route('/chat/:id')
    .get( adminControllers.privateChat);
    

router.route('/logout')
    .get((req,res)=>{
        req.logout();
        req.session.destroy();
        return res.redirect('/');
    })




module.exports = router;