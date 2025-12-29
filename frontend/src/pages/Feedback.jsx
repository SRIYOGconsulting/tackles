import React, { useState, useEffect } from "react";

export default function Feedback() {
  useEffect(() => {
    document.title = "Share Your Feedback | Tackles";
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    country: "",
    place: "",
    workDone: "",
    message: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const data = new FormData();
    data.append("name", form.name);
    data.append("country", form.country);
    data.append("place", form.place);
    data.append("workDone", form.workDone);
    data.append("message", form.message);
    data.append("photo", form.photo);

    try {
      const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          country: "",
          place: "",
          workDone: "",
          message: "",
          photo: null,
        });
      } else {
        alert("Error submitting feedback.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while submitting feedback.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-emerald-800 text-center mb-4">
          Share Your Feedback
        </h1>

        <p className="text-center text-gray-700 mb-12">
          Tell us about your experience with our service.
        </p>

        {submitted && (
          <div className="mb-8 bg-emerald-50 border border-emerald-300 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-emerald-800">
              Feedback Submitted
            </h2>
            <p className="text-gray-700 mt-2">
              Thank you for sharing your experience.
            </p>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-2xl border border-emerald-300 shadow-sm"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
            disabled={submitted}
          />

          <input
            list="countries"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
            disabled={submitted}
          />
          <datalist id="countries">
            <option value="UAE" />
            <option value="USA" />
            <option value="Australia" />
          </datalist>

          <input
            list="places"
            name="place"
            placeholder="Place (Dubai, San Francisco, Sydney)"
            value={form.place}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
            disabled={submitted}
          />
          <datalist id="places">
            <option value="Dubai" />
            <option value="San Francisco" />
            <option value="Sydney" />
          </datalist>

          <input
            list="services"
            name="workDone"
            placeholder="Work Done"
            value={form.workDone}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
            disabled={submitted}
          />
          <datalist id="services">
            <option value="AC Maintenance & Servicing" />
            <option value="Electrical Repairs" />
            <option value="Plumbing" />
            <option value="Painting & Decorating" />
            <option value="Carpentry" />
            <option value="Flooring & Surface Fixes" />
            <option value="Gutter & Roof Cleaning" />
            <option value="Pressure Washing" />
            <option value="Smart Home & Fixture Installations" />
          </datalist>

          <textarea
            name="message"
            placeholder="Write your feedback"
            value={form.message}
            onChange={handleChange}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-emerald-500"
            rows="4"
            required
            disabled={submitted}
          ></textarea>

          <label className="border-2 border-dashed border-emerald-300 rounded-lg p-4 text-center cursor-pointer hover:bg-emerald-50 transition">
            <span className="text-emerald-700 font-medium">
              Upload your headshot
            </span>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              required
              disabled={submitted}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={`p-3 rounded-lg font-semibold transition text-white ${
              submitted
                ? "bg-emerald-500 cursor-not-allowed"
                : "bg-emerald-700 hover:bg-emerald-800"
            }`}
          >
            {isSubmitting
              ? "Submitting..."
              : submitted
              ? "Submitted"
              : "Submit Feedback"}
          </button>
        </form>
      </div>
    </section>
  );
}
