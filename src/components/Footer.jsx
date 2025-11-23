import React from "react";
import logo from "../assets/images/logo.png";

// SVG Icons
import iconX from "../assets/icons/x.svg";
import iconFacebook from "../assets/icons/facebook.svg";
import iconLinkedIn from "../assets/icons/linkedin.svg";
import iconYouTube from "../assets/icons/youtube.svg";
import iconTwitch from "../assets/icons/twitch.svg";
import iconGithub from "../assets/icons/github.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-green-900 text-gray-200 pt-16 pb-12">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-4">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-2 rounded-md shadow-sm">
              <img src={logo} alt="Tackles Logo" className="h-12 w-auto" />
            </div>
            <h3 className="text-3xl font-semibold tracking-wide text-white">
              Tackles
            </h3>
          </div>

          {/* DESCRIPTION — THE REAL FIX: max-w-lg (WIDER) */}
          <div className="text-[15px] leading-relaxed text-gray-300 max-w-lg space-y-4 mb-6">
            <p>
              Tackles provides reliable handyman and maintenance services for homes and workplaces. 
              Our team focuses on clean work and steady support so your tasks feel easy to manage 
              without unnecessary hassle or confusion.
            </p>

            <p>
              From AC servicing and electrical work to plumbing, painting, flooring, and routine 
              maintenance, we keep your space organised, safe, and comfortable with service you can 
              depend on every single day.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            {[iconX, iconFacebook, iconLinkedIn, iconYouTube, iconTwitch, iconGithub].map(
              (icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 shadow-sm transition"
                >
                  <img src={icon} className="w-5 h-5" />
                </a>
              )
            )}
          </div>

        </div>

        {/* RIGHT GRID */}
        <div className="grid grid-cols-2 gap-10">

          {/* BROWSE MORE */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Browse More</h4>
            <ul className="space-y-2">
              {[
                { name: "Team", href: "/team" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "FAQs", href: "/faq" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Disclaimer", href: "/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-sm px-2 py-1 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
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
                    className="block text-sm px-2 py-1 rounded-md text-gray-300 hover:bg-white/10 hover:text-white transition cursor-default"
                  >
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBSCRIBE */}
          <div className="col-span-2 mt-4 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your eMail address"
              className="bg-white text-gray-700 text-sm px-4 py-2 rounded-md w-full outline-none"
            />
            <button className="px-5 py-2 bg-white text-emerald-900 font-semibold rounded-md hover:bg-emerald-100 transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-emerald-800 mt-12 mb-6 mx-6 opacity-60"></div>

      {/* COPYRIGHT */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2018 - 2024 Tackles Technical LLC. All Rights Reserved.</p>

        <p className="mt-2 sm:mt-0">
          Technology Partner:{" "}
          <span className="text-emerald-300 font-semibold tracking-wide">SRIYOG</span>
        </p>
      </div>

    </footer>
  );
}
