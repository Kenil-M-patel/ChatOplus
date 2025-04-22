require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
require('./Src/config/dbConnect')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.port || 5000
const route  =  require('./Src/api')
app.use(express.json());
app.use('/api', route);

const users = {};


require('./Src/socket')(io); 


// io.on('connection', (socket) => {
//     const userId = socket.handshake.query.user_id;

//     console.log(`User connected: ${userId}`);
  
//     if (userId) {
//       users[userId] = socket;
//     }
  

//     socket.on('message' , (data)=>{

//       let parsedData;
//       try {
//         parsedData = typeof data === "string" ? JSON.parse(data) : data;
//       } catch (e) {
//         console.error("Invalid JSON:", data);
//         return;
//       }

//         const senderId = socket.handshake.query.user_id;
//         const targetUserId = parsedData.targetUserId;  
//         const message = parsedData.message;

//         console.log("Sender ID:", senderId);
//         console.log("Target ID:", targetUserId);
//         console.log("Message:", message);
       

//         const targetSocket = users[targetUserId];
//         if (targetSocket) {
//           targetSocket.emit("hey there", message);
//         }

//     })

//     socket.on('disconnect', () => {
//       console.log('User disconnected');
//     });


//   });


 server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });