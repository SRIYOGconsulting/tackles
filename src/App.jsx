import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet /> {/* 👈 This is where child pages (Home, About, etc.) render */}
      </main>
      <Footer />
    </>
  );
};

export default App;
