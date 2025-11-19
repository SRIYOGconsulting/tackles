import React, { useEffect } from "react";
import contactImg from "../assets/images/contact.png"; // ✅ make sure this image exists

export default function Contact() {

  // ⭐ Set tab title
  useEffect(() => {
    document.title = "Contact | Tackles";
  }, []);

  return (
    <section className="min-h-screen bg-white py-20 px-6 flex flex-col items-center text-gray-800">
      {/* 🌿 Header */}
      <div className="max-w-6xl w-full text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-emerald-900 tracking-tight mb-3">
          We Wanna Hear From You!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Contact us, we're always here to help you out.
        </p>
      </div>

      {/* 🌿 Contact Boxes */}
      <div className="max-w-6xl w-full grid sm:grid-cols-3 gap-8 mb-20">
        {/* Visit */}
        <div className="bg-gradient-to-br from-[#064E3B] via-[#036B49] to-[#048B57] 
                        text-white rounded-xl p-6 text-center shadow-[0_0_20px_rgba(6,95,70,0.25)] 
                        border border-emerald-300 hover:shadow-[0_0_30px_rgba(6,95,70,0.45)] 
                        hover:scale-[1.04] transition-all duration-500">
          <h2 className="text-lg font-semibold mb-2 flex justify-center items-center gap-1">
            📍 Visit Us
          </h2>
          <p className="text-sm leading-relaxed opacity-95">
            G 01 Ontario Tower <br /> Business Bay
          </p>
        </div>

        {/* Email */}
        <a
          href="mailto:info@tackles.pro"
          className="bg-gradient-to-br from-[#065F46] via-[#047857] to-[#059669] 
                     text-white rounded-xl p-6 text-center shadow-[0_0_20px_rgba(6,95,70,0.25)] 
                     border border-emerald-300 hover:shadow-[0_0_30px_rgba(6,95,70,0.45)] 
                     hover:scale-[1.04] transition-all duration-500"
        >
          <h2 className="text-lg font-semibold mb-2 flex justify-center items-center gap-1">
            ✉️ Email Us
          </h2>
          <p className="text-sm leading-relaxed opacity-95">info@tackles.pro</p>
        </a>

        {/* Call */}
        <a
          href="tel:+971556165029"
          className="bg-gradient-to-br from-[#064E3B] via-[#036B49] to-[#048B57] 
                     text-white rounded-xl p-6 text-center shadow-[0_0_20px_rgba(6,95,70,0.25)] 
                     border border-emerald-300 hover:shadow-[0_0_30px_rgba(6,95,70,0.45)] 
                     hover:scale-[1.04] transition-all duration-500"
        >
          <h2 className="text-lg font-semibold mb-2 flex justify-center items-center gap-1">
            📞 Call Us
          </h2>
          <p className="text-sm leading-relaxed opacity-95">+971-55-6165029</p>
        </a>
      </div>

      {/* 🌿 Form + Image */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-[0_0_25px_rgba(6,95,70,0.25)] 
                        border border-emerald-200 hover:shadow-[0_0_40px_rgba(6,95,70,0.4)] 
                        transition-all duration-500 p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">
            Get in Touch
          </h2>

          <form className="grid gap-5">
            <input
              className="border border-emerald-200 rounded-lg px-4 py-3 outline-none 
                         focus:ring-2 focus:ring-emerald-600 text-gray-700 shadow-inner"
              placeholder="Full Name"
              required
            />
            <input
              className="border border-emerald-200 rounded-lg px-4 py-3 outline-none 
                         focus:ring-2 focus:ring-emerald-600 text-gray-700 shadow-inner"
              placeholder="Email Address"
              type="email"
              required
            />
            <input
              className="border border-emerald-200 rounded-lg px-4 py-3 outline-none 
                         focus:ring-2 focus:ring-emerald-600 text-gray-700 shadow-inner"
              placeholder="City (Dubai / Sydney / San Francisco)"
              required
            />
            <textarea
              className="border border-emerald-200 rounded-lg px-4 py-3 outline-none 
                         focus:ring-2 focus:ring-emerald-600 text-gray-700 shadow-inner"
              rows="4"
              placeholder="Service needed & message"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#059669]
              hover:from-[#036A48] hover:via-[#047B5A] hover:to-[#06A272]
              text-white px-8 py-3 rounded-lg text-base font-semibold 
              shadow-[0_0_20px_rgba(6,95,70,0.35)]
              hover:shadow-[0_0_30px_rgba(6,95,70,0.5)] 
              transition-all duration-500"
            >
              Send Message ✉️
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={contactImg}
            alt="Contact Illustration"
            className="w-full max-w-md object-contain 
                       drop-shadow-[0_0_25px_rgba(6,95,70,0.4)] 
                       hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* 🌍 Location Section */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-emerald-900 mb-5">
            Our Location
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Visit our{" "}
            <span className="text-emerald-700 font-semibold">Business Bay</span>{" "}
            office, a comfortable and professional space designed for our
            clients. We’re located inside Ontario Tower, easily accessible and
            welcoming to everyone.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(6,95,70,0.3)] 
                        border border-emerald-400 hover:shadow-[0_0_40px_rgba(6,95,70,0.45)] 
                        transition-all duration-500 h-[420px]">
          <iframe
            src="https://maps.google.com/maps?q=G%2001%20Ontario%20Tower%20Business%20Bay&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            title="Tackles Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
