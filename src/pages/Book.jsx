import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookingImg from "../assets/images/booking.png"; 

export default function Book() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Book Appointment | Tackles";
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    startDate: "",
    endDate: "",
    shifts: "",
    priority: "",
    location: "",
    requiredService: "",
    phone: "",
    budget: "",
    emirates: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // ⭐ All 9 services
  const servicesList = [
    "AC Maintenance & Servicing",
    "Electrical Repairs",
    "Plumbing",
    "Painting & Decorating",
    "Carpentry",
    "Flooring & Surface Fixes",
    "Gutter & Roof Cleaning",
    "Pressure Washing",
    "Smart Home & Fixture Installations",
  ];

  // ⭐ Filter logic for autocomplete
  const filteredServices = form.requiredService
    ? servicesList.filter((s) =>
        s.toLowerCase().includes(form.requiredService.toLowerCase())
      )
    : servicesList;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const selectService = (service) => {
    setForm({ ...form, requiredService: service });
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📋 Appointment Data:", form);
    alert("✅ Appointment booked successfully! (Frontend only)");
    navigate("/results");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700 flex flex-col items-center justify-center py-20 px-6">

      {/* 🌿 Header section with title + image side-by-side */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl mb-10">
        <div className="text-left sm:text-left w-full sm:w-1/2 mb-6 sm:mb-0">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide leading-tight">
            Book An Appointment
          </h1>
          <p className="text-emerald-100 text-sm sm:text-base mt-3 max-w-md">
            Schedule your service at your convenience, fast, reliable, and professional.
          </p>
        </div>

        {/* Image on the right (full shape, no crop) */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src={bookingImg}
            alt="Book Appointment"
            className="w-64 sm:w-80 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* 🌿 Form Container */}
      <div className="max-w-5xl w-full bg-white/95 rounded-2xl shadow-2xl p-8 sm:p-10 border border-emerald-200 backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              eMail
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="example@email.com"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              End Date *
            </label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Shifts */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Shifts *
            </label>
            <select
              name="shifts"
              value={form.shifts}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Priority *
            </label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select priority</option>
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your location"
            />
          </div>

          {/* ⭐ REQUIRED SERVICE — AUTOCOMPLETE FIELD */}
          <div className="relative">
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Required Service *
            </label>

            <input
              type="text"
              name="requiredService"
              value={form.requiredService}
              onChange={(e) => {
                handleChange(e);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}   
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              required
              placeholder="Type or choose a service"
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {/* Suggestions dropdown */}
            {showSuggestions && (
              <div className="absolute z-20 w-full bg-white border border-emerald-200 rounded-lg shadow-md mt-1 max-h-48 overflow-y-auto">
                {filteredServices.length === 0 ? (
                  <div className="px-4 py-2 text-gray-500 text-sm">
                    No matching services
                  </div>
                ) : (
                  filteredServices.map((service, i) => (
                    <div
                      key={i}
                      onMouseDown={() => selectService(service)}
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-emerald-50"
                    >
                      {service}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter phone number"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Budget *
            </label>
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your budget"
            />
          </div>

          {/* Emirates */}
          <div>
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Emirates *
            </label>
            <select
              name="emirates"
              value={form.emirates}
              onChange={handleChange}
              required
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Emirates</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
              <option>Sharjah</option>
              <option>Ajman</option>
              <option>Ras Al Khaimah</option>
              <option>Umm Al Quwain</option>
              <option>Fujairah</option>
            </select>
          </div>

          {/* Description */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-emerald-900 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-emerald-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Write about your requirement or special note..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-emerald-700 via-green-700 to-lime-600 
              hover:from-emerald-800 hover:via-green-800 hover:to-lime-700
              text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-lg
              hover:shadow-emerald-400/40 transition-all duration-300
              disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
