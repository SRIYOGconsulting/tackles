import React, { useState, useEffect } from "react";
import aboutImg from "../assets/images/about.png"; 
import { ShieldCheck, Users, Leaf, Handshake } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About | Tackles";
  }, []);

  const [activeSection, setActiveSection] = useState("about");

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

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">
      {/* PAGE TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
          All About Us
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Hard labour works like plumbing, AC installation, and plastering require not only
          strength but skill. That’s where our team comes in, to take your problems off your shoulders.
        </p>
      </div>

      {/* LEFT SECTIONS + RIGHT IMAGE */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {Object.keys(sections).map((key) => (
            <div key={key} className="relative">
              {/* BUTTON */}
              <button
                onMouseEnter={() => setActiveSection(key)}
                onClick={() => setActiveSection(key)}
                className={`w-full text-left px-5 py-3 rounded-lg transition-all duration-300 font-semibold text-lg ${
                  activeSection === key
                    ? "bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white shadow-md"
                    : "bg-white border border-emerald-100 text-emerald-900 hover:bg-emerald-50"
                }`}
              >
                {sections[key].title}
              </button>

              {/* DESCRIPTION */}
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

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Tackles"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-emerald-100"
          />
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold text-emerald-800 mb-6">
          Internationally Trusted Certifications
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Tackles is certified for providing top-quality, safe, and sustainable services.
          We’re trusted by clients for our integrity and craftsmanship.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white rounded-xl shadow-lg py-6 hover:scale-105 transition-transform duration-300">
            <ShieldCheck size={36} className="mb-2" />
            <span className="font-semibold">Safety</span>
          </div>

          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-700 via-green-700 to-lime-600 text-white rounded-xl shadow-lg py-6 hover:scale-105 transition-transform duration-300">
            <Users size={36} className="mb-2" />
            <span className="font-semibold">Community</span>
          </div>

          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-green-600 via-emerald-700 to-lime-600 text-white rounded-xl shadow-lg py-6 hover:scale-105 transition-transform duration-300">
            <Leaf size={36} className="mb-2" />
            <span className="font-semibold">Sustainability</span>
          </div>

          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-emerald-800 via-green-700 to-lime-600 text-white rounded-xl shadow-lg py-6 hover:scale-105 transition-transform duration-300">
            <Handshake size={36} className="mb-2" />
            <span className="font-semibold">Integrity</span>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
