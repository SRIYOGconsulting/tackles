import React from "react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 sm:grid-cols-3">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 flex items-center justify-center">
              <img
                src={logo}
                alt="Tackles Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-wide">
              Tackles
            </h3>
          </div>

          {/* ⭐ UPDATED DESCRIPTION ONLY */}
          <p className="text-sm leading-relaxed text-gray-300">
            Tackles is an A-grade handyman company built on skill, reliability, 
            and trust. Our team handles everything from small repairs to complete 
            home and workplace improvements. We take care of plumbing, painting, 
            electrical upgrades, AC installation, flooring, and general maintenance 
            with the same level of attention and care. 
            <br/> <br/>
            Our goal is to make every space safer, cleaner, and more comfortable
            while giving customers a service they can rely on any day of the
            week.
          </p>
        </div>

        {/* Browse More */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Browse More
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Team", href: "/team" },
              { name: "Testimonials", href: "/testimonials" },
              { name: "FAQs", href: "/faqs" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms" },
              { name: "Disclaimer", href: "/disclaimer" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative inline-block w-full px-3 py-1.5 text-gray-300 text-sm rounded-md
                             hover:text-white transition-all duration-300
                             before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-lime-600 before:to-emerald-700
                             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                             hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2">
            {[
              "Air Conditioning",
              "Air Filtration",
              "Electromechanical Equipment",
              "Carpentry & Flooring",
              "Engraving & Ornamentation",
              "Plaster & Cladding",
            ].map((service) => (
              <li key={service}>
                <span
                  className="relative inline-block w-full px-3 py-1.5 text-gray-300 text-sm rounded-md
                             hover:text-white transition-all duration-300
                             before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-emerald-700 before:to-green-600
                             before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                             hover:shadow-lg hover:-translate-y-0.5 overflow-hidden cursor-default"
                >
                  <span className="relative z-10">{service}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-emerald-800 mt-10 mb-6 mx-6"></div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2018 - 2024 Tackles Technical LLC. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0">
          Technology Partner :{" "}
          <span className="text-emerald-300 font-medium">Sriyog</span>
        </p>
      </div>
    </footer>
  );
}
