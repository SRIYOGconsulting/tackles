import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 🌆 Background images
import dubaiImg from "../assets/images/dubai.png";
import acBgImg from "../assets/images/ac.png"; // ✅ background image for hero slide
import paintImg from "../assets/images/paint.jpg";

// 🧰 Service images
import acImg from "../assets/images/services/ac-service.png"; // ✅ service section image
import electricalImg from "../assets/images/services/electrical.png";
import plumbingImg from "../assets/images/services/plumbing.png";

// 🌐 Icons
import whatsappIcon from "../assets/images/whatsapp.png";
import facebookIcon from "../assets/images/facebook.png";
import playstoreIcon from "../assets/images/playstore.png";

// 🧱 Component
import ServiceCard from "../components/ServiceCard.jsx";

const slides = [
  {
    id: 1,
    title: "Hire a Plumber in Dubai",
    subtitle: "Professional service marketplace",
    image: dubaiImg,
  },
  {
    id: 2,
    title: "AC Maintenance in Dubai",
    subtitle: "Repair, Shifting & Cleaning",
    image: acBgImg,
  },
  {
    id: 3,
    title: "Painting Services in Dubai",
    subtitle: "Color Therapy",
    image: paintImg,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 🌆 HERO BACKGROUND SECTION */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>

        {/* Text */}
        <div className="absolute top-[6vh] left-1/2 transform -translate-x-1/2 text-center z-10">
          <h1
            className="text-3xl sm:text-5xl font-extrabold text-white mb-2"
            style={{
              WebkitTextStroke: "1.2px black",
              textShadow: "0 3px 6px rgba(0,0,0,0.7)",
            }}
          >
            {slides[current].title}
          </h1>
          <p className="text-base sm:text-lg text-white font-medium">
            {slides[current].subtitle}
          </p>
        </div>

        {/* Arrows + Buttons */}
        <div className="absolute bottom-[6vh] left-0 right-0 flex flex-col items-center justify-center z-10">
          <div className="flex items-center justify-center gap-8 sm:gap-12 mb-4">
            <button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
              }
              className="bg-white/25 hover:bg-white/35 text-white text-3xl sm:text-4xl px-5 py-3 rounded-full transition-all duration-300 shadow-md"
            >
              &#8592;
            </button>

            <button
              className="relative bg-gradient-to-r from-green-800 via-emerald-700 to-green-600
              hover:from-green-900 hover:via-emerald-800 hover:to-green-700
              text-white px-8 py-3 sm:px-10 sm:py-3.5 rounded-md text-sm sm:text-base font-bold shadow-xl
              transition-all duration-300 animate-pulse-soft"
            >
              Book a Service
            </button>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
              className="bg-white/25 hover:bg-white/35 text-white text-3xl sm:text-4xl px-5 py-3 rounded-full transition-all duration-300 shadow-md"
            >
              &#8594;
            </button>
          </div>

          <button
            className="bg-gradient-to-r from-lime-700 via-green-800 to-emerald-700
            hover:from-lime-800 hover:via-green-900 hover:to-emerald-800
            text-white px-6 py-1.5 rounded-md text-xs sm:text-sm font-semibold shadow-md
            hover:shadow-emerald-400/40 transition-all duration-300"
          >
            More Services
          </button>
        </div>

        {/* Floating Social Buttons */}
        <div className="fixed right-6 bottom-[5%] flex flex-col items-center gap-3 z-50">
          <a
            href="https://wa.me/971551234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]"
            />
          </a>
          <a
            href="https://www.facebook.com/YourPageName"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-7 h-7 sm:w-8 sm:h-8 cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(59,89,152,0.8)]"
            />
          </a>
        </div>
      </div>

      {/* 📱 DOWNLOAD OUR APP BUTTON */}
      <div className="w-full bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-10 flex justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=your.app.id"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 
          hover:from-green-800 hover:via-emerald-800 hover:to-green-700 text-white 
          px-8 py-3 rounded-lg shadow-lg hover:shadow-emerald-400/40 transition-all duration-300"
        >
          <img
            src={playstoreIcon}
            alt="Play Store"
            className="h-12 sm:h-14 w-auto transform scale-y-120"
          />
          <span className="text-base sm:text-lg font-bold tracking-wide">
            Download Our App
          </span>
        </a>
      </div>

      {/* 💡 WHAT CAN WE DO SECTION */}
      <section className="bg-white py-20 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-emerald-900 mb-4">
          What Can We Do?
        </h2>
        <p className="text-gray-700 text-lg mb-12">
          Our top services : quick, professional, and trusted across everywhere.
        </p>

        {/* Top 3 Services */}
        <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={acImg}
            title="AC Maintenance & Servicing"
            desc="Filter cleaning, gas refilling, indoor/outdoor unit checks, and cooling efficiency testing."
          />
          <ServiceCard
            image={electricalImg}
            title="Electrical Repairs"
            desc="Switches, sockets, lighting fixtures, ceiling fans, and short-circuit safety checks."
          />
          <ServiceCard
            image={plumbingImg}
            title="Plumbing"
            desc="Leaks, faucet and pipe fixes, shower or toilet repairs, and drain unclogging."
          />
        </div>

        {/* View All Services Button */}
        <div className="mt-16">
          <button
            onClick={() => navigate("/services")}
            className="bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 
            hover:from-green-800 hover:via-emerald-800 hover:to-green-700 text-white 
            px-8 py-3 rounded-lg shadow-lg hover:shadow-emerald-400/40 transition-all duration-300 text-lg font-semibold"
          >
            View All Services
          </button>
        </div>
      </section>

      {/* Animation */}
      <style>
        {`
          @keyframes pulse-soft {
            0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(34,197,94,0.6); }
            50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(34,197,94,0.9); }
          }
          .animate-pulse-soft {
            animation: pulse-soft 2.2s ease-in-out infinite;
          }
        `}
      </style>
    </>
  );
};

export default Home;
