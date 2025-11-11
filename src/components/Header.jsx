import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext.jsx"; // ✅ added
import logo from "../assets/images/logo.png";

const link = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    isActive
      ? "text-white bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 shadow-md"
      : "text-emerald-900 hover:text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-emerald-600 hover:to-green-500 hover:shadow-md"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { location, setLocation } = useLocation(); // ✅ now shared globally
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const handleBookClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/book");
  };

  const handleLocationClick = (loc) => {
    setLocation(loc); // ✅ updates context, reflects in Home.jsx instantly
  };

  return (
    <>
      {/* 🌿 TOP BAR */}
      <div className="bg-gradient-to-r from-green-800 via-emerald-800 to-green-700 text-white text-sm py-2 w-full shadow-md relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap gap-2 px-4">
          {/* ✅ CONTACT SECTION */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
                📞
              </button>
              <span className="font-medium">055-6185029</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-lime-500 via-green-500 to-emerald-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all">
                ✉️
              </button>
              <a
                href="mailto:info@tackles.pro"
                className="underline underline-offset-2 hover:text-lime-300 transition-colors font-medium"
              >
                info@tackles.pro
              </a>
            </div>
          </div>

          {/* ✅ LOCATION BUTTONS */}
          <div className="flex items-center gap-3">
            {["Dubai", "SanFrancisco", "Sydney"].map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocationClick(loc)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  location === loc
                    ? "bg-white text-green-800 shadow-md"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🌿 MAIN NAVBAR */}
      <div
        className={`w-full bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-b shadow-md transition-all duration-500 ${
          scrolled ? "fixed top-0 left-0 z-40" : "relative"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
          {/* ✅ Tackles + Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-90 transition-all focus:outline-none"
          >
            <span className="text-2xl font-semibold text-green-800 tracking-wide">
              Tackles
            </span>
            <img
              src={logo}
              alt="Tackles Logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* ✅ Navigation */}
          <nav className="flex gap-3">
            <NavLink to="/" className={link}>
              Home
            </NavLink>
            <NavLink to="/about" className={link}>
              About Us
            </NavLink>
            <NavLink to="/services" className={link}>
              Services
            </NavLink>
            <NavLink to="/gallery" className={link}>
              Gallery
            </NavLink>

            <button
              onClick={handleBookClick}
              className="px-4 py-2 rounded-full text-sm font-medium text-emerald-900 transition-all duration-300 
              hover:text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-emerald-700 hover:to-green-600 hover:shadow-md"
            >
              Book an Appointment
            </button>

            <NavLink to="/contact" className={link}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}
