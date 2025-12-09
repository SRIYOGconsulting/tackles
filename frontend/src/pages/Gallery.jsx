import React, { useEffect } from "react";
import image1 from "../assets/gallery/image1.png";
import image2 from "../assets/gallery/image2.png";
import image3 from "../assets/gallery/image3.png";
import image4 from "../assets/gallery/image4.png";
// image5 removed
import image6 from "../assets/gallery/image6.png";
import image7 from "../assets/gallery/image7.png";
import image8 from "../assets/gallery/image8.png";
import image9 from "../assets/gallery/image9.png";
import image10 from "../assets/gallery/image10.png";
import image11 from "../assets/gallery/image11.png";
import image12 from "../assets/gallery/image12.png";

export default function Gallery() {
  
  // ⭐ Set tab title
  useEffect(() => {   
    document.title = "Gallery | Tackles";
  }, []);  
  

  const images = [
    {
      src: image1,
      desc:
        "Fresh flooring and white paint paired with natural sunlight and cozy sofa setup.",
    },
    {
      src: image2,
      desc:
        "Premium indoor finishing with painted walls, sunlight, stylish ceiling, and clean flooring.",
    },
    {
      src: image3,
      desc:
        "Aesthetic wall designs with color-matched panels and decorative accents.",
    },
    {
      src: image4,
      desc:
        "Modern wooden kitchen with quality cabinetry, lighting design, and interior architecture.",
    },
    {
      src: image6,
      desc: "AC cleaning and servicing performed by trained professionals.",
    },
    {
      src: image7,
      desc:
        "Smooth paint finishing with polished flooring and clean touch-ups.",
    },
    {
      src: image8,
      desc:
        "Luxury bedroom decor with stylish furniture, fragrant setups, and decorative installations.",
    },
    {
      src: image9,
      desc:
        "Open indoor space with ceiling fixtures and clean interior finishing.",
    },
    {
      src: image10,
      desc:
        "Indoor living area featuring ocean view, modern furniture, and premium flooring.",
    },
    {
      src: image11,
      desc:
        "Bright sunlit room with elegant sofas and a simple white backdrop.",
    },
    {
      src: image12,
      desc:
        "Relaxing indoor setup with indoor plants, soft lighting, and stylish sofas.",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-20 px-6 text-gray-800 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-5xl text-center mb-14">
        <h1 className="text-5xl font-extrabold text-emerald-900 mb-4 tracking-tight">
          Our Works
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          You can view our working quality and decide for yourselves whether
          we are best for you. All the repair and decoration work people
          find difficult comes naturally to our professionals.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white border border-emerald-200 
            shadow-[0_0_20px_rgba(6,95,70,0.18)] hover:shadow-[0_0_32px_rgba(6,95,70,0.28)]
            transform hover:scale-[1.03] transition-all duration-500 group"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:opacity-90"
              />

              {/* DESCRIPTION BAR */}
              <div
                className="absolute bottom-0 left-0 w-full px-5 py-3 
                bg-gradient-to-t from-emerald-900 via-emerald-800/90 to-transparent
                text-white text-sm opacity-0 group-hover:opacity-100 
                translate-y-3 group-hover:translate-y-0
                transition-all duration-300"
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
