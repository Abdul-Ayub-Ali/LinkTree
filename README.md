# 🌳 LinkTree Upgraded (Tree & Branches Architecture)

A professional, production-grade Link-in-Bio tool with a multi-profile/room layout, secure access/refresh token authentication, and advanced analytics tracking.

## 🧑‍💻 Developer Details
- **Name:** Abdul Ayub Ali 
- **Role:** Full-Stack MERN Developer
- **Project Type:** Personal MVP / Learning Project

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** React.js (Vite), Tailwind CSS
- **Validation & Tools:** Zod, JWT (Access/Refresh Tokens), Cookie-Parser

## 📁 Project Setup 

### Prerequisites
Ensure you have **Node.js** (v18+) and **MongoDB** installed locally on your operating system.

### Step 1: Clone and Install Dependencies
```bash
## 📁 How to Run Backend
1. cd server
2. npm install
3. npm run dev

## 🎨 How to Run Frontend
1. cd frontend
2. npm install
3. npm run dev

```
## 🚀 Key Architectural Features Implemented
- **App & Server Separation:** Decoupled `app.js` (configurations/middlewares) and `server.js` (execution/database connection) for high scalability and clean testing.
- **Strict Environment Guard:** Runtime `.env` validation using **Zod** schema to catch missing configuration tokens before the server spins up.
- **Centralized Error Ecosystem:** Standardized error blueprinting using a custom `ApiError` class mapped to a global Express error-intercepting middleware.
- **Unified Constants:** Centralized global states like database naming conventions and unified HTTP codes inside `src/constants/`.

---

## 📊 Current Development Checklist
- [x] Folder Architecture Layering
- [x] Zod Runtime Environment Schema Mapping
- [x] Global Response/Error Utility Matrix
- [x] Monorepo Base Setup Core Completed
- [x] User Model Schema & Password Encryption Hook Setup (`bcrypt`)
- [ ] Zod Request Body Validation Middleware
- [ ] Authentication Controllers & JWT Flow (Access/Refresh Tokens)