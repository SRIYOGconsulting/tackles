import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ⭐ Import PNG images
import p1 from "../assets/testimonials/p1.png";
import p2 from "../assets/testimonials/p2.png";
import p3 from "../assets/testimonials/p3.png";
import p4 from "../assets/testimonials/p4.png";
import p5 from "../assets/testimonials/p5.png";
import p6 from "../assets/testimonials/p6.png";
import p7 from "../assets/testimonials/p7.png";
import p8 from "../assets/testimonials/p8.png";
import p9 from "../assets/testimonials/p9.png";
import p10 from "../assets/testimonials/p10.png";
import p11 from "../assets/testimonials/p11.png";
import p12 from "../assets/testimonials/p12.png";
import p13 from "../assets/testimonials/p13.png";
import p14 from "../assets/testimonials/p14.png";
import p15 from "../assets/testimonials/p15.png";

const reviews = [
  {
    place: "Discovery Gardens",
    task: "Painting",
    review:
      "TACKLES did an exceptional job with the painting in our office. The finish was flawless, and they completed the work ahead of schedule. Highly recommended!",
    name: "Sameer Azeem Shadid",
    country: "Saudi Arabia",
    img: p1,
  },
  {
    place: "Silicon Oasis",
    task: "Air Conditioning & Filtration",
    review:
      "The team at TACKLES provided outstanding service for our air conditioning and filtration systems. Their expertise ensured everything runs smoothly.",
    name: "Jaxon De Garis",
    country: "Australia",
    img: p2,
  },
  {
    place: "Burj Khalifa",
    task: "Plaster & Cladding",
    review:
      "Amazing attention to detail and high-quality work. Our home looks fantastic!",
    name: "João Santos Dias",
    country: "Brazil",
    img: p3,
  },
  {
    place: "Dubai Mall",
    task: "Wall Paper Fixing",
    review:
      "Professional installation and flawless finishing. Very satisfied!",
    name: "Wen Tai",
    country: "China",
    img: p4,
  },
  {
    place: "Dubai Miracle Garden",
    task: "Floor & Wall Tiling",
    review:
      "Perfect tile alignment and a very skilled team. Beautiful result.",
    name: "Haron Idsinga",
    country: "Germany",
    img: p5,
  },
  {
    place: "Mall of the Emirates",
    task: "Carpentry",
    review:
      "Custom furniture looks beautiful. Excellent craftsmanship.",
    name: "Samuel Simmons",
    country: "England",
    img: p6,
  },
  {
    place: "Downtown Dubai",
    task: "Flooring",
    review:
      "Efficient, respectful team. The flooring looks amazing.",
    name: "Jeannine Séguin",
    country: "France",
    img: p7,
  },
  {
    place: "Dubai Marina",
    task: "Air Conditioning",
    review:
      "Smooth installation. Clear explanation from technicians. Great work.",
    name: "Niklas Austerlitz",
    country: "Portugal",
    img: p8,
  },
  {
    place: "JBR",
    task: "Air Filtration",
    review:
      "Indoor air quality improved instantly. Very happy!",
    name: "Marcus Aakre",
    country: "Norway",
    img: p9,
  },
  {
    place: "Palm Jumeirah",
    task: "Painting",
    review:
      "Clean and efficient work. The painting is flawless.",
    name: "Maximillia Hermansson",
    country: "Sweden",
    img: p10,
  },
  {
    place: "Arabian Ranches",
    task: "Plaster & Cladding",
    review:
      "High craftsmanship and beautiful finishing.",
    name: "Marya Lazareva",
    country: "Russia",
    img: p11,
  },
  {
    place: "Emirates Hills",
    task: "Wall Paper Fixing",
    review:
      "Smooth and precise wallpaper fitting. Loved it.",
    name: "Luigi Onio",
    country: "Italy",
    img: p12,
  },
  {
    place: "JLT",
    task: "Floor & Wall Tiling",
    review:
      "Skilled team with excellent attention to detail.",
    name: "Tapio Mäki",
    country: "Finland",
    img: p13,
  },
  {
    place: "Business Bay",
    task: "Carpentry",
    review:
      "Beautifully crafted kitchen carpentry. Excellent finish.",
    name: "Bazyli Maciejewski",
    country: "Poland",
    img: p14,
  },
  {
    place: "The Greens",
    task: "Flooring",
    review:
      "Perfect flooring job. Clean work from start to finish.",
    name: "Nick G. McNeil",
    country: "Tunisia",
    img: p15,
  },
];

export default function Testimonials() {
  const [newTestimonials, setNewTestimonials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Testimonials | Tackles";

    fetch("http://localhost:5000/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setNewTestimonials(data);
      })
      .catch((err) => console.log("Error fetching testimonials:", err));
  }, []);

  return (
    <section className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-800 text-center mb-4">
          What People Say?
        </h1>

        <p className="text-center text-gray-700 text-lg mb-10">
          Trusted feedback from our clients across Dubai
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* STATIC REVIEWS */}
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 hover:shadow-emerald-300/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-6">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-emerald-600 shadow-md mb-4"
                />
                <h3 className="text-xl font-bold text-emerald-800">{r.name}</h3>
                <p className="text-gray-500 text-sm">{r.country}</p>
              </div>

              <div className="w-full h-px bg-gray-200 my-5"></div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-emerald-800">Place:</span>{" "}
                  {r.place}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold text-emerald-800">Work Done:</span>{" "}
                  {r.task}
                </p>
              </div>

              <p className="text-gray-800 text-center leading-relaxed italic">
                “{r.review}”
              </p>
            </div>
          ))}

          {/* BACKEND TESTIMONIALS */}
          {newTestimonials.map((t, i) => (
            <div
              key={`db-${i}`}
              className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-200 hover:shadow-emerald-300/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-6">
                <img
                  src={`http://localhost:5000${t.photoUrl}`}
                  alt={t.name}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-emerald-600 shadow-md mb-4"
                />
                <h3 className="text-xl font-bold text-emerald-800">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.country}</p>
              </div>

              <div className="w-full h-px bg-gray-200 my-5"></div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-emerald-800">Place:</span>{" "}
                  {t.place}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  <span className="font-semibold text-emerald-800">Work Done:</span>{" "}
                  {t.workDone}
                </p>
              </div>

              <p className="text-gray-800 text-center leading-relaxed italic">
                “{t.message}”
              </p>
            </div>
          ))}

        </div>

        {/* Feedback button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate("/feedback")}
            className="px-8 py-4 rounded-full bg-emerald-700 text-white font-semibold text-lg hover:bg-emerald-800 transition"
          >
            Give Your Feedback
          </button>
        </div>

      </div>
    </section>
  );
}
