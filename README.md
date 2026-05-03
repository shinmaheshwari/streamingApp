# 🎬 Streaming App (Microservices + Docker Compose)

A production‑oriented, full‑stack **video streaming application** built using a **microservices architecture**, Docker Compose, and modern web technologies.

The platform is designed to support authentication, video streaming, admin management, real‑time chat, and a scalable frontend—all containerized and orchestrated with Docker.

---

## 🏗️ Architecture Overview

The application follows a **microservices architecture**, where each core domain is isolated into its own service.

Browser
|
|── Frontend (React)
|
| Auth | Streaming | Admin | Chat | MongoDB |

### Services

| Service Name        | Port | Description |
|--------------------|------|-------------|
| Auth Service        | 3001 | User authentication, JWT handling |
| Streaming Service   | 3002 | Video catalog & playback APIs |
| Admin Service       | 3003 | Video upload & content management |
| Chat Service        | 3004 | Real‑time chat using Socket.IO |
| Frontend            | 3000 | React web application |
| MongoDB             | 27017 (internal) | Central database |

---

## 📁 Project Structure


streamingApp/
├── docker-compose.yml
├── backend/
│   ├── authService/
│   ├── streamingService/
│   ├── adminService/
│   └── chatService/
└── frontend/

Each backend service contains:
- `Dockerfile`
- `package.json`
- `server.js`

---

## 🚀 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Socket.IO (Chat)**

### Frontend
- **React**
- **Nginx (Production build)**

### DevOps
- **Docker**
- **Docker Compose**
- **Nginx (Reverse Proxy – planned)**

---

## ⚙️ Prerequisites

Make sure you have the following installed locally:

- Docker ≥ 20.x
- Docker Compose ≥ 2.x
- Git

---

## ▶️ Running the App Locally

### 1️⃣ Clone the repository

```bash
git clone git@github.com:<your-username>/streaming-app.git
cd streaming-app


2️⃣ Build & start all services
Shelldocker-compose up --buildShow more lines
This will:

Build all service images
Start MongoDB
Start all backend services
Start the frontend


🔐 Environment Variables
Each service uses environment variables defined via Docker Compose.
Common variables:
ShellPORT=300XMONGO_URI=mongodb://mongo:27017/streamingappJWT_SECRET=supersecretkey``Show more lines
👉 Do NOT commit real secrets — use .env files for production.

📦 Production Notes

MongoDB is not exposed to host (internal Docker network only)
Frontend can be served via Nginx
Backend services are built in production mode
Designed to integrate with:

AWS S3 + CloudFront (video streaming)
MongoDB Atlas (database)
HTTPS via Nginx / Load Balancer




🧠 Future Enhancements

✅ User signup & login (JWT, refresh tokens)
✅ AWS S3 video upload & signed streaming URLs
✅ Watch‑party feature with synchronized playback
✅ Admin dashboard
✅ Nginx reverse proxy + HTTPS
✅ CI/CD via GitHub Actions
✅ Cloud deployment (AWS / Azure)
