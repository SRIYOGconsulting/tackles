import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext.jsx";
import logo from "../assets/images/logo.png";

const link = ({ isActive }) =>
  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
    isActive
      ? "text-white bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 shadow-md"
      : "text-emerald-900 hover:text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-emerald-600 hover:to-green-500 hover:shadow-md"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { location, setLocation } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const resetMenu = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", resetMenu);
    return () => window.removeEventListener("resize", resetMenu);
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
    setLocation(loc);
  };

  return (
    <>
      {/* 🌿 TOP BAR */}
      <div className="bg-gradient-to-r from-green-800 via-emerald-800 to-green-700 text-white text-xs sm:text-sm py-2 w-full shadow-md relative z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2 px-4">

          {/* CONTACT */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">

              {/* PHONE ICON */}
              <button className="px-2 py-1 text-xs rounded-full bg-white text-green-800 border border-emerald-300 shadow-sm 
              hover:shadow-md hover:scale-105 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                📞
              </button>

              {/* ✅ Phone number is now clickable */}
              <a
                href="tel:0556185029"
                className="font-medium hover:text-lime-300 transition-colors"
              >
                055-6185029
              </a>
            </div>

            <div className="flex items-center gap-1.5">

              {/* EMAIL ICON */}
              <button className="px-2 py-1 text-xs rounded-full bg-white text-green-800 border border-emerald-300 shadow-sm 
              hover:shadow-md hover:scale-105 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                ✉️
              </button>

              {/* EMAIL (clickable, no underline) */}
              <a
                href="mailto:info@tackles.pro"
                className="text-white hover:text-lime-300 transition-colors font-medium"
              >
                info@tackles.pro
              </a>

            </div>
          </div>

          {/* LOCATION BUTTONS */}
          <div className="flex gap-2 sm:gap-3">
            {["Dubai", "SanFrancisco", "Sydney"].map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocationClick(loc)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
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

          {/* LOGO */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-90 transition-all focus:outline-none"
          >
            <span className="text-2xl font-semibold text-green-800 tracking-wide">
              Tackles
            </span>
            <img src={logo} alt="Tackles Logo" className="h-10 w-auto object-contain" />
          </button>

          {/* HAMBURGER */}
          <button
            className="sm:hidden text-green-800 text-3xl font-bold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* NAVIGATION */}
          <nav
            className={`
              sm:flex gap-3 
              absolute sm:static left-0 w-full sm:w-auto 
              bg-white sm:bg-transparent 
              px-6 sm:px-0 py-4 sm:py-0 
              transition-all duration-300 
              shadow-md sm:shadow-none z-40

              ${menuOpen ? "top-16 opacity-100" : "top-[-500px] opacity-0 sm:opacity-100"}
            `}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 w-full">

              <NavLink to="/" className={link} onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>

              <NavLink to="/about" className={link} onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>

              <NavLink to="/services" className={link} onClick={() => setMenuOpen(false)}>
                Services
              </NavLink>

              <NavLink to="/gallery" className={link} onClick={() => setMenuOpen(false)}>
                Gallery
              </NavLink>

              {/* BOOK BUTTON */}
              <button
                onClick={() => {
                  handleBookClick();
                  setMenuOpen(false);
                }}
                className="px-4 py-2 rounded-full text-sm font-medium text-emerald-900 text-left sm:text-center 
                hover:text-white hover:bg-gradient-to-r hover:from-green-700 hover:via-emerald-700 hover:to-green-600 
                hover:shadow-md transition-all duration-300"
              >
                Book an Appointment
              </button>

              <NavLink to="/contact" className={link} onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>

            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
