const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendInvitationSchema = new Schema({
    senderId: {
        type:Schema.Types.ObjectId,
        res:'User'
    },
    receiverId:{
        type:Schema.Types.ObjectId,
        res:"User",
    },
});

module.exports = mongoose.model('FriendInvitation',friendInvitationSchema);