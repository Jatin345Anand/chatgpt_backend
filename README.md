# chatgpt_backend
This is built in node expressjs.
# 📦 SecretEcho

> A lightweight real-time AI companion chat app built with **React.js + Next.js + Node.js + Express + MongoDB**.


## 🚀 Project Features
- User authentication (Signup/Login) using JWT.
- Real-time messaging using **Socket.io**.
- Persistent chat history (MongoDB + local storage).
- AI Companion generates simple rule-based replies.
- Dockerized full-stack application with MongoDB.
- Clean modular architecture and error handling.


## 🧩 Tech Stack
| Layer       | Technology                |
|-------------|----------------------------|
| Frontend    | React.js, Next.js, Axios, Socket.io-client |
| Backend     | Node.js, Express.js, Socket.io |
| Database    | MongoDB (Mongoose)          |
| Authentication | JWT Token-Based Auth      |
| Deployment  | Docker, Docker Compose     |


## 📂 Project Structure

```
backend/
├── config/
├── controllers/
├── models/
├── routes/
├── middleware/
├── sockets/
├── utils/
├── app.js
├── server.js

frontend/
├── components/
├── pages/
├── services/
├── hooks/
├── contexts/
├── public/
├── styles/
├── _app.js
```


## 🛠️ Local Development Setup

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/secretecho.git
cd secrectecho
```

2. **Backend Setup:**
```bash
cd backend
npm install
npm run dev
```

3. **Frontend Setup:**
```bash
cd frontend
npm install
npm run dev
```

4. **MongoDB Setup:**
- Local MongoDB server at `mongodb://localhost:27017/secretecho`
- Alternatively, use MongoDB Atlas cloud.


## 🐳 Dockerized Setup (Recommended)

1. **Start the Full Application:**

```bash
docker-compose up --build
```

2. **Access Application:**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)


## ⚙️ Available API Endpoints

| Method | Endpoint                  | Description               |
|--------|----------------------------|---------------------------|
| POST   | `/api/auth/signup`         | Register new user         |
| POST   | `/api/auth/login`          | User login (JWT)           |
| GET    | `/api/messages/history`    | Fetch chat history        |
| POST   | `/api/messages/send`       | Send a message            |


## 📜 Design Decisions
- **Next.js**: SSR ready, easy frontend routing.
- **Modular Express Backend**: MVC pattern used.
- **Socket.io**: Real-time two-way messaging.
- **JWT**: Stateless authentication.
- **Docker Compose**: Simplified deployment.
- **Rate Limiting Ready**: Future-proof API protections.


## 🛡️ Future Enhancements
- Better AI Companion (real ML/NLP models).
- Upload and display images/files.
- Typing indicators.
- Group chats / multi-user rooms.
- OAuth login (Google, GitHub).


## 👨‍💻 Author
Made with ❤️ by [Your Name]

---

> Feel free to Fork ⭐ and Contribute 🚀
