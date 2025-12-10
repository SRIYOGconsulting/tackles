Tackles – Full Stack Application

Tackles is a complete home maintenance and service booking platform built with a React frontend and a Node.js/Express backend. The system handles service listings, booking submissions, testimonial uploads, and provides a clean architecture for future features.

Overview

The goal of Tackles is to offer users a simple way to book home services like painting, cleaning, plumbing, AC maintenance, and more.
On the admin side, the structure is ready for expansion into a dashboard where bookings, testimonials, and service data can be managed.

📁 Project Structure
tackles/
├── frontend/                  # React + Vite application (client)
│   ├── src/                  # Components, pages, utils
│   ├── public/               # Static assets (images, icons, etc.)
│   └── README.md             # Frontend-specific documentation
│
└── backend/                   # Node.js + Express API server
    ├── routes/               # API route handlers
    ├── models/               # Mongoose models (Bookings, Testimonials, etc.)
    ├── uploads/              # Uploaded testimonial images
    ├── server.js             # Main application entry point
    └── README.md             # Backend-specific documentation

🚀 Getting Started
1. Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:
http://localhost:5173

2. Backend Setup
cd backend
npm install
npm run dev


Backend runs at:
http://localhost:5000

📚 Documentation

This project contains dedicated documentation for both environments:

📄 Frontend Documentation
Located at:
frontend/README.md
Includes details for:

Folder structure

Environment variables

Routes and components

UI flow & usage

📄 Backend Documentation
Located at:
backend/README.md
Includes information on:

API endpoints

Models

File uploads (Multer)

MongoDB connection

Environment configuration

🔗 Tech Stack
Frontend

React

Vite

React Router

Tailwind CSS / CSS3

Axios

Backend

Node.js

Express

MongoDB

Mongoose

CORS

dotenv

Multer (file uploads)

🧩 Core Features

Service booking form

Photo uploads for testimonials

Admin-ready API routes

Modular code structure (easy to expand)

Separate frontend & backend documentation

Static assets served from public and uploads directories

Local development support for both client and server

📦 Installation (Full Project)

Clone the repository:

git clone https://github.com/yourusername/tackles.git
cd tackles


Then follow the frontend and backend setup instructions above.

📝 License

ISC License