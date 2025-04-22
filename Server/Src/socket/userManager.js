const users = {};

const addUser = (userId, socket) => {
  users[userId] = socket;
};

const removeUser = (userId) => {
  delete users[userId];
};

const getUserSocket = (userId) => {
  return users[userId];
};

module.exports = { addUser, removeUser, getUserSocket };
