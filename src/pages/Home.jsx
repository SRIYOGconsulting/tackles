import React, { useState, useEffect } from "react";
import dubaiImg from "../assets/images/dubai.png";
import acImg from "../assets/images/ac.png";
import paintImg from "../assets/images/paint.jpg";

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
    image: acImg,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Backgrounds */}
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

      {/* TEXT (Top Center) */}
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

      {/* ARROWS + BUTTONS (Lowered Position) */}
      <div className="absolute bottom-[6vh] left-0 right-0 flex flex-col items-center justify-center z-10">
        <div className="flex items-center justify-center gap-8 sm:gap-12 mb-4">
          {/* Left Arrow with visible background */}
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="bg-white/25 hover:bg-white/35 text-white text-3xl sm:text-4xl px-5 py-3 rounded-full transition-all duration-300 shadow-md"
          >
            &#8592;
          </button>

          {/* Book a Service (solid, visible, pulsing but not blurred) */}
          <button
            className="relative bg-gradient-to-r from-green-800 via-emerald-700 to-green-600
            hover:from-green-900 hover:via-emerald-800 hover:to-green-700
            text-white px-8 py-3 sm:px-10 sm:py-3.5 rounded-md text-sm sm:text-base font-bold shadow-xl
            transition-all duration-300 animate-pulse-soft"
          >
            Book a Service
          </button>

          {/* Right Arrow with visible background */}
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="bg-white/25 hover:bg-white/35 text-white text-3xl sm:text-4xl px-5 py-3 rounded-full transition-all duration-300 shadow-md"
          >
            &#8594;
          </button>
        </div>

        {/* More Services (below main button, smaller) */}
        <button
          className="bg-gradient-to-r from-lime-700 via-green-800 to-emerald-700
          hover:from-lime-800 hover:via-green-900 hover:to-emerald-800
          text-white px-6 py-1.5 rounded-md text-xs sm:text-sm font-semibold shadow-md
          hover:shadow-emerald-400/40 transition-all duration-300"
        >
          More Services
        </button>
      </div>

      {/* Custom smooth pulse animation */}
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
    </div>
  );
};

export default Home;
