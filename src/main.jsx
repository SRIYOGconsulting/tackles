import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocationProvider } from "./context/LocationContext.jsx"; // ✅ Added
import "./index.css";
import App from "./App.jsx";

// 🌍 Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";
import Dubai from "./pages/Dubai.jsx";
import Sydney from "./pages/Sydney.jsx";
import SanFrancisco from "./pages/SanFrancisco.jsx";
import Book from "./pages/Book.jsx";
import Gallery from "./pages/Gallery.jsx"; // ✅ added

// 🧭 Router setup
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/legal", element: <Legal /> },
      { path: "/dubai", element: <Dubai /> },
      { path: "/sydney", element: <Sydney /> },
      { path: "/san-francisco", element: <SanFrancisco /> },
      { path: "/book", element: <Book /> },
      { path: "/gallery", element: <Gallery /> }, // ✅ new route added here
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 🌍 Global Location Context Provider */}
    <LocationProvider>
      <RouterProvider router={router} />
    </LocationProvider>
  </React.StrictMode>
);
