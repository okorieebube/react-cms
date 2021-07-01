const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({

        message: {
                type:String,
        },
        sender:{
                type:String,
        },
        reciever:{
                type:String,
        },
        timeCreated:{
                type:Date,
                default:Date.now()
        },
        conversationId:{
                type:Schema.Types.ObjectId,
                ref:'Conversation',
        },
});

const Message = mongoose.model('Message', messageSchema)
module.exports = Message;