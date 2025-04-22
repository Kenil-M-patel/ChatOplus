const { addUser, removeUser } = require('./userManager');
const registerMessageHandler = require('./event/message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    // const userId = socket.handshake.auth?.userId || socket.handshake.query?.userId;
    const userId = socket.handshake.query.user_id;
    console.log(userId)

    if (!userId) {
      console.log("❌ User ID missing on connection");
      socket.disconnect();
      return;
    }

    console.log(`🔌 User connected: ${userId}`);
    
    // You can now use this userId
    addUser(userId, socket);

    // Register all event listeners here
    registerMessageHandler(socket, io);

    socket.on('disconnect', () => {
      console.log(`❌ Disconnected: ${userId}`);
      removeUser(userId);
    });
  });
};
