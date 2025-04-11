# 📱 ChatOplus

A real-time chatting application that allows users to sign up, log in, send/receive messages, and interact with other users instantly. The app supports private chats, typing indicators, message timestamps, and online status indicators.

---

## 📌 Project Overview

- **Project Name**: Realtime Chat App  
- **Description**: Real-time one-to-one chat application with user authentication and WebSocket-based messaging.

---

## 🚀 Features

- User Authentication (Register/Login)
- One-to-one messaging
- Real-time updates using WebSockets
- Online/offline status
- Typing indicator
- Message timestamps
- Persistent message history (saved in DB)
- Mobile-responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Axios  
- Socket.io-client  

### Backend
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT (Authentication)  
- Socket.io  

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Backend Setup
```bash
cd server
npm install
npm run dev
```

Create a `.env` file in the `server` directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

### 3. Frontend Setup
```bash
cd client
npm install
npm start
```

---

## 🔗 API Endpoints

### Auth
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login with credentials  

### Messages
- `GET /api/messages/:userId` – Get message history with a user  
- `POST /api/messages/send` – Send a new message  

### Users
- `GET /api/users` – Get all users (for contact list)  
- `GET /api/users/:id` – Get user by ID  

---

## 🔌 WebSocket Events

### Client Emits:
- `join`: User joins chat  
- `sendMessage`: Send a message  
- `typing`: Typing indicator  

### Server Emits:
- `receiveMessage`: Incoming message  
- `userTyping`: Notify other user that someone is typing  
- `userOnline` / `userOffline`: Online status updates  

---

## 🧪 Testing

- Manual testing in browser  
- Use Postman for API testing  
- Use multiple tabs to simulate two users  

---

## 📁 Folder Structure

```
chat-app/
│
├── client/         # React frontend
│   ├── src/
│   └── ...
│
├── server/         # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
│
└── README.md
```

---

## 🛡️ Security

- Passwords hashed with bcrypt  
- JWT tokens used for secure authentication  
- Basic input validation  

---

## 💡 Future Enhancements

- Group chats  
- File sharing (images, documents)  
- Voice/video calls  
- Emojis & reactions  
- Dark/light mode toggle  

---

## 📞 Contact

- **Developer**: Your Name  
- **Email**: your.email@example.com  
- **GitHub**: [your-github-link](https://github.com/your-username)  
