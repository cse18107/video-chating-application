const Message = require('../models/message');
const Conversation = require('../models/conversation');

const directMessageHandler = async (socket,data) => {
    try{
        console.log('direct message event is being handled')
        const {userId} = socket.user;
        const {receiverUserId, content} = data;

        // create new message
        const message = await Message.create({
            content:content,
            author:userId,
            date:new Date(),
            type:"DIRECT"
        });

        // find if conversation is exist with this two users - if not create new
        const conversation = await Conversation.findOne({
            participants:{$all: [userId, receiverUserId]},
        })

        if(conversation){
            conversation.messages.push(message._id);
            await conversation.save();

            // perform and update to sender and receiver if is online
            chatUpdates.updateChatHistory(conversation._id.toString());
        }else{
            // create new conversation if not exist
            const newConversation = await Conversation.create({
                message:[message._id],
                participants:[userId,receiverUserId],
            });

            //perform and update to sender and receiver if is online
            chatUpdates.updateChatHistory(conversation._id.toString());
        }

    }catch (err) {
        console.log(err);
    }
}

module.exports = directMessageHandler