import React from "react";
import image1 from "../assets/gallery/image1.png";
import image2 from "../assets/gallery/image2.png";
import image3 from "../assets/gallery/image3.png";
import image4 from "../assets/gallery/image4.png";
import image5 from "../assets/gallery/image5.png";
import image6 from "../assets/gallery/image6.png";
import image7 from "../assets/gallery/image7.png";
import image8 from "../assets/gallery/image8.png";
import image9 from "../assets/gallery/image9.png";
import image10 from "../assets/gallery/image10.png";
import image11 from "../assets/gallery/image11.png";
import image12 from "../assets/gallery/image12.png";

export default function Gallery() {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12,
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white py-20 px-6 text-gray-800 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-5xl text-center mb-14">
        <h1 className="text-5xl font-extrabold text-emerald-900 mb-4 tracking-tight">
          Sample Works
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          You can view our working quality and decide for yourselves whether we are best for you.
          All of the repair and decoration work people find hard to do comes naturally to our professionals.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-[0_0_25px_rgba(6,95,70,0.25)] hover:shadow-[0_0_40px_rgba(6,95,70,0.35)] transform hover:scale-[1.03] transition-all duration-500 border border-emerald-200 bg-white"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover hover:opacity-90 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
