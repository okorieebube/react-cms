const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({

   body: {
       type:String,
       required:true,
   },
   user: {
       type:Schema.Types.Object_Id,
       ref:'user',
   },
   date: {
       type:Date,
       default: Date.now(),
   },
   commentIsApproved: {
       type:Boolean,
       default:false,
   }

});


module.exports = {Comments:mongoose.model('Comments', commentSchema)};