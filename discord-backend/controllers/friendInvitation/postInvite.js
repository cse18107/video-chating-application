const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require('../../socketHandlers/updates/friends');


const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, mail } = req.user;

  // check if friend that we would like to invite is not user
  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res
      .status(409)
      .send("Sorry, You cannot become friend with yourself");
  }

  const targetUser = await User.findOne({
    mail: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    res
      .status(404)
      .send(
        `friend of ${targetMailAddress} has not been found. Please check mail address`
      );
  }

  // Check if invitation has been already sent
  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    res.status(409).send("Invitation has been already send");
  }

  // checks if the uer which we would like to invite is already our friend
  const userAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (userAlreadyFriends) {
    res.status(409).send("Friend already added. Please check friends list");
  }


  // Create new invitation in database
  try {
    const newInvitation = await FriendInvitation.create({
      senderId: userId,
      receiverId: targetUser._id,
    });

    // if invitation has been successfully created we would like to update friends invitation if other user is online


    // send pending invitations update to specific user
    friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());

    res.status(201).send("Invitation has been sent");
  } catch (err) {
    res.status(500).send(err.message);
  }

  
};
module.exports = postInvite;
