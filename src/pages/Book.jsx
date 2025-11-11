import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    location: "",
    services: [],
    preferredDate: "",
    preferredTime: "",
    password: "",
    confirmPassword: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleServiceSelect = (service) => {
    setForm((prev) => {
      const alreadySelected = prev.services.includes(service);
      const updatedServices = alreadySelected
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    if (form.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log("📋 Booking Data:", form);
      alert("✅ Booking submitted successfully! (Frontend only)");
      setLoading(false);
      navigate("/results"); // optional redirect
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-[#041739] via-[#0A2C70] to-[#133E97]">
      <div className="w-full max-w-3xl bg-white/95 rounded-2xl shadow-2xl p-8 border border-[#C8D6FF] backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold text-center text-[#021138] mb-8">
          Book an Appointment
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="Enter your name"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="customerPhone"
              value={form.customerPhone}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="customerEmail"
              value={form.customerEmail}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="example@email.com"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="e.g. Kathmandu, Chabahil, near OM hospital"
            />
          </div>

          {/* Choose Services */}
          <div className="relative sm:col-span-2">
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Choose Service(s)
            </label>
            <button
              type="button"
              onClick={toggleDropdown}
              className="w-full bg-white border border-[#C8D6FF] rounded-lg px-4 py-2 text-left text-gray-700 font-medium flex justify-between items-center focus:ring-2 focus:ring-[#1778F2]"
            >
              {form.services.length > 0
                ? form.services.join(", ")
                : "Select your services"}
              <span className="ml-2 text-[#1778F2] font-bold text-lg">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-[#C8D6FF] rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className="flex items-center px-4 py-2 hover:bg-[#EAF0FF] cursor-pointer text-[#021138]"
                  >
                    <input
                      type="checkbox"
                      checked={form.services.includes(service)}
                      onChange={() => handleServiceSelect(service)}
                      className="mr-3 accent-[#1778F2]"
                    />
                    {service}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Preferred Time
            </label>
            <input
              type="time"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="Enter password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="Confirm password"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-[#021138] mb-1">
              Additional Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-[#C8D6FF] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1778F2]"
              placeholder="Describe your problem or request..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-[#021138] via-[#0A2C70] to-[#1778F2]
              hover:from-[#010B2E] hover:via-[#0A2C70] hover:to-[#1C4BF2]
              text-white px-10 py-3 rounded-lg text-lg font-semibold shadow-lg
              hover:shadow-[0_0_15px_rgba(23,120,242,0.6)] transition-all duration-300
              disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>

        {/* Logout Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
