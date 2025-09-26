# 🐻 Grizzly Bunch

Grizzly Bunch is a **social blogging platform** where users can share their stories, interact with others, and discover engaging content.  
Built with a **React (Vite) frontend** and **Node.js + Express + MongoDB backend**, this project demonstrates a modern full-stack web app setup.

---

## 🚀 Features
- 🔐 **Authentication** – User signup, login, and JWT-based auth
- 📝 **Create, Read, Delete Blogs** – Users can publish their own posts and browse others
- 🎨 **Interactive UI** – Animations, transitions, and reusable UI components
- 👤 **User Accounts** – Profile pages with posts, profile picture, and cover image
- 📡 **REST API** – Cleanly structured backend with controllers, models, and routes
- ⚡ **Frontend** – Fast development setup with Vite and React

---
Website Link - https://grizzly-bunch.netlify.app/
---

## 📂 Project Structure
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── components/ # UI + Layout components
│ │ ├── context/ # Auth context
│ │ ├── pages/ # App pages (Feed, Login, Post, etc.)
│ │ └── api/ # Axios API helper
│ └── public/ # Static assets
│
└── server/ # Backend (Node.js + Express + MongoDB)
├── config/ # Database connection
├── controllers/ # Auth + Blog controllers
├── middleware/ # JWT authentication
├── models/ # Mongoose schemas
└── routes/ # API routes

---

## 🛠️ Tech Stack
**Frontend**
- React (Vite)
- React Router
- Axios
- Tailwind CSS / Custom CSS
- AOS (Animate On Scroll)

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- Bcrypt (Password hashing)

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/grizzly-bunch.git
cd grizzly-bunch

2️⃣ Install Dependencies

Client

cd client
npm install

Server

cd ../server
npm install

3️⃣ Setup Environment Variables

In /server, create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000

4️⃣ Run the App

Backend

cd server
npm run dev

Frontend

cd client
npm run dev
```
---
📌 Available Scripts

Frontend (client)

npm run dev – Run development server

npm run build – Build production bundle

npm run preview – Preview production build

Backend (server)

npm run dev – Run server with nodemon

npm start – Run production server

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch (feature/your-feature)

Commit changes

Open a Pull Request

📜 License

This project is licensed under the MIT License.

🌟 Acknowledgements

React + Vite

Node.js + Express

MongoDB + Mongoose

AOS & React Bits for UI animations.
---
