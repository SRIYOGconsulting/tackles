import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx"; 
import "./index.css";
import App from "./App.jsx";

// 🌍 Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Book from "./pages/Book.jsx";
import Gallery from "./pages/Gallery.jsx";
import Team from "./pages/Team.jsx";
import Testimonials from "./pages/Testimonials.jsx"; // ⭐ NEW IMPORT
import FAQ from "./pages/FAQ.jsx";




// 🧭 Router setup
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/book", element: <Book /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/team", element: <Team /> },
      { path: "/testimonials", element: <Testimonials /> }, // ⭐ FIXED & ADDED
      { path: "/faq", element: <FAQ /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>
);
