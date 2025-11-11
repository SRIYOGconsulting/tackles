import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../context/LocationContext";
import aboutImg from "../assets/images/about.png";

// 🌆 Background images
import dubaiImg from "../assets/images/dubai.png";
import sanfranciscoImg from "../assets/images/sanfrancisco.avif";
import sydneyImg from "../assets/images/sydney.avif";
import acBgImg from "../assets/images/ac.png";
import paintImg from "../assets/images/paint.jpg";

// 🧰 Service images
import acImg from "../assets/images/services/ac-service.png";
import electricalImg from "../assets/images/services/electrical.png";
import plumbingImg from "../assets/images/services/plumbing.png";

// 🌐 Icons
import whatsappIcon from "../assets/images/whatsapp.png";
import facebookIcon from "../assets/images/facebook.png";
import playstoreIcon from "../assets/images/playstore.png";

// 👤 Testimonial images
import sameerImg from "../assets/images/testimonials/sameer.png";
import jaxonImg from "../assets/images/testimonials/jaxon.png";
import joaoImg from "../assets/images/testimonials/joao.png";

// 🧱 Component
import ServiceCard from "../components/ServiceCard.jsx";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { location } = useLocation();
  const [activeSection, setActiveSection] = useState("about");

  // 🌇 Slides depending on location
  const slides = [
    {
      id: 1,
      title: `Hire a Plumber in ${location}`,
      subtitle: "Professional service marketplace",
      image:
        location === "Dubai"
          ? dubaiImg
          : location === "SanFrancisco"
          ? sanfranciscoImg
          : sydneyImg,
    },
    {
      id: 2,
      title: `AC Maintenance in ${location}`,
      subtitle: "Repair, Shifting & Cleaning",
      image: acBgImg,
    },
    {
      id: 3,
      title: `Painting Services in ${location}`,
      subtitle: "Color Therapy",
      image: paintImg,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // 🧭 About Us (hover logic)
  const sections = {
    about: {
      title: "About Tackles",
      desc:
        "Tackles is a leading A-grade handyman company. Any repair or decoration work whether it be Plumbing, Painting, Air Conditioning, Floor and Wall fixing. Tackles is there for you.",
    },
    mission: {
      title: "Our Mission",
      desc:
        "We want to provide every repair, decoration, and design service so you don’t have to search different places for different needs.",
    },
    goals: {
      title: "Our Goals",
      desc:
        "Tackles focuses on providing the best service possible to make clients’ lives convenient and comfortable. Any work related to plumbing, painting, plastering, or AC installation is our responsibility.",
    },
  };

  // 💬 Testimonials data
  const testimonials = [
    {
      name: "Sameer Azeem Shadid",
      image: sameerImg,
      feedback:
        "TACKLES did an exceptional job with the painting in our office. The finish was flawless, and they completed the work ahead of schedule. Highly recommended for any painting needs!",
    },
    {
      name: "Jaxon De Garis",
      image: jaxonImg,
      feedback:
        "The team at TACKLES provided outstanding service for our air conditioning and filtration systems. Their expertise and prompt service ensured our system is running efficiently. Fantastic job!",
    },
    {
      name: "João Santos Dias",
      image: joaoImg,
      feedback:
        "I’m very pleased with the plaster and cladding work done by TACKLES. The attention to detail and quality of materials used were top-notch. Our home looks fantastic!",
    },
  ];

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

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>

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
              onClick={() => navigate("/book")}
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
            onClick={() => navigate("/services")}
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
          <a href="https://wa.me/971551234567" target="_blank" rel="noopener noreferrer">
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="w-8 h-8 sm:w-9 sm:h-9 cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]"
            />
          </a>
          <a href="https://www.facebook.com/YourPageName" target="_blank" rel="noopener noreferrer">
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

      {/* 🧱 ABOUT US SECTION */}
      <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
            All About Us
          </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Hard labour works like plumbing, AC installation, and plastering require not only
            strength but skill. That’s where our team comes in, to take your problems off your shoulders.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {Object.keys(sections).map((key) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveSection(key)}
              >
                <button
                  className={`w-full text-left px-5 py-3 rounded-lg transition-all duration-300 font-semibold text-lg ${
                    activeSection === key
                      ? "bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white shadow-md"
                      : "bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-50"
                  }`}
                >
                  {sections[key].title}
                </button>

                {activeSection === key && (
                  <div className="mt-3 ml-2 border-l-4 border-emerald-500 pl-4 bg-white rounded-r-xl shadow-sm py-3 px-2 animate-fadeIn">
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {sections[key].desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Tackles"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS SECTION */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 py-20 px-6 sm:px-12 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold text-emerald-900 mb-10">
          What People Say?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 border border-emerald-100"
            >
              <div className="w-24 h-24 mb-4 rounded-full bg-gray-100 overflow-hidden shadow-md ring-4 ring-emerald-200">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 italic mb-4 leading-relaxed">“{t.feedback}”</p>
              <h4 className="text-emerald-800 font-bold text-lg">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-in-out;
          }
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
