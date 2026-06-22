# 🌳 LinkTree Upgraded (Tree & Branches Architecture)

A professional, production-grade Link-in-Bio tool with a multi-profile/room layout, secure access/refresh token authentication, and advanced analytics tracking.

## 🧑‍💻 Developer Details
- **Name:** Abdul Ayub Ali 
- **Role:** Full-Stack MERN Developer
- **Project Type:** Personal MVP / Learning Project

## 🚀 Tech Stack
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Frontend:** React.js (Vite), Tailwind CSS
- **Validation & Tools:** Zod, JWT (Access/Refresh Tokens), Cookie-Parser, Bcrypt

---

## 🚀 Key Architectural Features Implemented

- **App & Server Separation:** Decoupled `app.js` (configurations/middlewares) and `server.js` (execution/database connection) for high scalability and clean testing.
- **Strict Environment Guard:** Runtime `.env` validation using Zod's `.safeParse()` ecosystem to catch missing configuration tokens before the server spins up.
- **Centralized Error Ecosystem:** Standardized error blueprinting using a custom `ApiError` class mapped to a global Express 4-argument error-intercepting middleware.
- **Dual-Layer Body Parsing:** Standardized both `express.json()` (for React/Axios clients) and `express.urlencoded()` (with extended nesting support) to guarantee error-free `req.body` population.
- **User Database Blueprint:** Designed `user.model.js` with automatic Mongoose pre-save hooks for password encryption via `bcrypt` and pre-built fields for future Google OAuth integration.
- **Decoupled Request Guard Layer:** Implemented a generic `validate.middleware.js` that intercepts requests, checks them against dedicated Zod schemas (`src/validations/`), and catches structural anomalies before they touch the controller.

---

## 📁 How to Run The Project

### Prerequisites
Ensure you have **Node.js** (v18+) and **MongoDB** installed locally on your operating system.

### 🎨 Running the Frontend
1. Navigate to the frontend directory:
```bash
   cd frontend
Install UI dependencies:

Bash
   npm install
Spin up the Vite development server:

Bash
   npm run dev
🗄️ Running the Backend Server
Navigate to the server directory:

Bash
   cd server
Install server-side dependencies:

Bash
   npm install
Spin up the backend execution entrypoint:

Bash
   npm run dev
(Verify execution by hitting http://localhost:5000/health in your browser)

📊 Current Development Checklist
[x] Folder Architecture Layering

[x] Zod Runtime Environment Schema Mapping

[x] Global Response/Error Utility Matrix

[x] Monorepo Base Setup Core Completed

[x] User Model Schema & Password Encryption Hook Setup (bcrypt)

[x] Centralized Zod Request Validation Middleware (validate.middleware.js)

[x] Authentication Zod Schemas Design (src/validations/auth.validation.js)

[ ] Authentication Service Layer (src/services/auth.service.js)

[ ] Authentication Controllers & JWT Flow (Access/Refresh Tokens)