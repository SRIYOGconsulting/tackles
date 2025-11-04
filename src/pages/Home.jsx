import React, { useState } from "react";
import dubaiImg from "../assets/images/dubai.png";
import acImg from "../assets/images/ac.png";
import paintImg from "../assets/images/paint.png";

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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full h-[90vh] md:h-screen bg-cover bg-center transition-all duration-700 overflow-hidden"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Centered content */}
      <div className="relative z-10 flex items-center h-full px-8 sm:px-16">
        <div className="max-w-md bg-white/90 p-10 rounded-md shadow-lg">
          <p className="text-sm text-gray-700">{slides[current].subtitle}</p>
          <h1 className="text-3xl font-bold text-green-700 mt-2 leading-snug">
            {slides[current].title}
          </h1>

          <div className="flex gap-4 mt-6">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm shadow-md">
              More Services
            </button>
            <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-md text-sm">
              Book a Service
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-10 left-14 flex gap-3 z-10">
        <button
          onClick={prevSlide}
          className="bg-green-600 text-white p-3 rounded-sm hover:bg-green-700 transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="bg-green-600 text-white p-3 rounded-sm hover:bg-green-700 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Home;
