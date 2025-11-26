import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext.jsx";
import logo from "../assets/images/logo.png";

// SVG icons
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";

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

  const handleLocationClick = (loc) => {
    setLocation(loc);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-green-800 via-emerald-800 to-green-700 text-white text-xs sm:text-sm py-2 w-full shadow-md relative z-50">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2 px-4">

          {/* CONTACT */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button className="px-2 py-1 text-xs rounded-full bg-white text-green-800 border border-emerald-300 shadow-sm 
              hover:shadow-md hover:scale-105 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
              </button>

              <a href="tel:0556185029" className="font-medium hover:text-lime-300 transition-colors">
                055-6185029
              </a>
            </div>

            <div className="flex items-center gap-1.5">
              <button className="px-2 py-1 text-xs rounded-full bg-white text-green-800 border border-emerald-300 shadow-sm 
              hover:shadow-md hover:scale-105 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300">
                <img src={mailIcon} alt="Email" className="w-4 h-4" />
              </button>

              <a href="mailto:info@tackles.pro" className="text-white hover:text-lime-300 transition-colors font-medium">
                info@tackles.pro
              </a>
            </div>
          </div>

          {/* LOCATION BUTTONS */}
          <div className="flex gap-2 sm:gap-3">
            {["Dubai", "San Francisco", "Sydney"].map((loc) => (
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

      {/* MAIN NAVBAR */}
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
            <img src={logo} alt="Tackles Logo" className="h-12 w-auto object-contain" />
          </button>

          {/* HAMBURGER MENU */}
          <button
            className="sm:hidden text-green-800 text-3xl font-bold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* NAVIGATION */}
          <div className="flex items-center gap-4">

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

                <NavLink
                  to="/"
                  className={link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                >
                  About Us
                </NavLink>

                <NavLink
                  to="/gallery"
                  className={link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                >
                  Gallery
                </NavLink>

                <NavLink
                  to="/contact"
                  className={link}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setMenuOpen(false);
                  }}
                >
                  Contact
                </NavLink>
              </div>
            </nav>

            {/* ⭐ NEW — BOOK A SERVICE BUTTON (WHITE, BORDER GREEN, GLOW) */}
            <button
              onClick={() => {
                navigate("/book");
                setMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className="
                hidden sm:inline-block
                px-5 py-2
                rounded-full font-semibold text-green-800
                bg-white border-2 border-green-700
                shadow-[0_0_8px_rgba(0,100,0,0.3)]
                hover:shadow-[0_0_12px_rgba(0,120,0,0.45)]
                hover:scale-105 active:scale-95
                transition-all duration-300
              "
            >
              Book a Service
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
