const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({

    title:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'public',
    },
    description:{
        type:String,
        required:true,
    },
    dateCreated:{
        type:Date,
        default:Date.now(),
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'user',
    },
    category: {
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    comments: [{
        type:Schema.Types.ObjectId,
        ref:'comments',
    }],
    allowComments : {
        type:Boolean,
        default:false,
    },
    file: {
        type:String,
        default:"",
    },

});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;