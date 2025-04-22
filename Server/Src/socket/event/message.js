const { getUserSocket } = require('../userManager');
const Message = require('../../db/model/message');
const User = require('../../db/model/user');

const registerMessageHandler = (socket, io) => {
  socket.on('message', async (data) => {
    let parsedData;
    try {
      parsedData = typeof data === "string" ? JSON.parse(data) : data;
    } catch (err) {
      console.error("Invalid JSON:", data);
      return;
    }

    const senderId = socket.handshake.query.user_id;
    const targetUserId = parsedData.targetUserId;
    const messageText = parsedData.message;

    console.log(`📨 ${senderId} -> ${targetUserId}: ${messageText}`);

    const targetSocket = getUserSocket(targetUserId);
    if (targetSocket) {
      targetSocket.emit("hey there", {
        from: senderId,
        message: messageText,
        timestamp: new Date()
      });
    }

    // ✅ Add both users to each other's contact list
    try {
      const sender = await User.findById(senderId).select("fullname profilePic");
      const receiver = await User.findById(targetUserId).select("fullname profilePic");

      if (sender && receiver) {

        await User.findByIdAndUpdate(senderId, {
          $addToSet: {
            contacts: {
              user: receiver._id,
              fullname: receiver.fullname,
              profilePic: receiver.profilePic
            }
          }
        });


        await User.findByIdAndUpdate(targetUserId, {
          $addToSet: {
            contacts: {
              user: sender._id,
              fullname: sender.fullname,
              profilePic: sender.profilePic
            }
          }
        });
      }
    } catch (err) {
      console.error("❌ Error updating contacts:", err);
    }

    // 💾 Save message
    try {
      await Message.create({
        sender: senderId,
        receiver: targetUserId,
        message: messageText
      });
      console.log("💾 Message saved to DB");
    } catch (err) {
      console.error("❌ Error saving message to DB:", err);
    }
  });
};

module.exports = registerMessageHandler;
