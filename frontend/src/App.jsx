import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      {/* Scrolls to top whenever the route changes */}
      <ScrollToTop />

      {/* Main navigation header */}
      <Header />

      {/* Page content rendered here */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
