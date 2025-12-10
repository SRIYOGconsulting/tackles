Tackles – Full Stack Application

Tackles is a full stack home maintenance and service booking platform built with a React frontend and a Node.js/Express backend. The application allows users to submit service bookings and testimonials, while maintaining a modular and scalable code structure.

Overview

The purpose of the Tackles application is to provide a simple and efficient way for users to book home services such as painting, cleaning, AC repair, plumbing, and more.
The backend handles bookings, testimonials, and file uploads, while the frontend presents a clean UI for interacting with these features.

Project Structure
tackles/
├── frontend/                  # React + Vite application
│   ├── src/                  # Components, pages, utilities
│   ├── public/               # Static assets
│   └── README.md             # Frontend-specific documentation
│
└── backend/                   # Node.js + Express API server
    ├── routes/               # API routes
    ├── models/               # Mongoose models
    ├── uploads/              # Uploaded images
    ├── server.js             # Main server file
    └── README.md             # Backend-specific documentation

Getting Started
Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:
http://localhost:5173

Backend Setup
cd backend
npm install
npm run dev


Backend runs on:
http://localhost:5000

Documentation

Separate documentation files are included for clarity:

Frontend documentation: frontend/README.md

Backend documentation: backend/README.md

Tech Stack
Frontend

React

Vite

React Router

CSS3 / Tailwind CSS

Axios

Backend

Node.js

Express

MongoDB

Mongoose

CORS

dotenv

Multer for file uploads

Core Features

Service booking form system

Testimonial submission with image upload

REST API for handling bookings and testimonials

Organized folder structure for scalability

Static file handling for uploaded images

Separate environment configurations for frontend and backend

Installation (Full Project)

Clone the repository:

git clone https://github.com/yourusername/tackles.git
cd tackles


Then follow the setup steps for both the frontend and backend.

License

ISC