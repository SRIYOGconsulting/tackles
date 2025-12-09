import React, { useState } from "react";

export default function TestimonialForm() {
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

    const data = new FormData();
    data.append("name", form.name);
    data.append("country", form.country);
    data.append("place", form.place);
    data.append("workDone", form.workDone);
    data.append("message", form.message);
    data.append("photo", form.photo);

    const res = await fetch("http://localhost:5000/api/testimonials", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      alert("Thank you for your testimonial!");
    } else {
      alert("Error submitting testimonial.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 bg-white p-6 rounded-2xl border border-emerald-300"
    >
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">
        Submit Your Testimonial
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        className="border p-3 rounded-lg"
        required
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        onChange={handleChange}
        className="border p-3 rounded-lg"
        required
      />

      <input
        type="text"
        name="place"
        placeholder="Place (Dubai Marina, JBR, etc.)"
        onChange={handleChange}
        className="border p-3 rounded-lg"
        required
      />

      <input
        type="text"
        name="workDone"
        placeholder="Work Done (Painting, AC Service, etc.)"
        onChange={handleChange}
        className="border p-3 rounded-lg"
        required
      />

      <textarea
        name="message"
        placeholder="Write your review"
        onChange={handleChange}
        className="border p-3 rounded-lg"
        rows="4"
        required
      ></textarea>

      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleChange}
        className="border p-3 rounded-lg"
        required
      />

      <button className="bg-emerald-700 text-white p-3 rounded-lg">
        Submit
      </button>
    </form>
  );
}
