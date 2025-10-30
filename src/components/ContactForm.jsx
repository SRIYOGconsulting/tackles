import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted! (Integrate Formspree or backend later)");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6 mt-10 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-green-800 text-center">Get in Touch</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        rows="4"
        className="w-full border p-2 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
      >
        Send Message
      </button>
    </form>
  );
}
