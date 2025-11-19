import ServiceCard from "../components/ServiceCard.jsx";
import { useNavigate } from "react-router-dom";

import acImg from "../assets/images/services/ac-service.png";
import electricalImg from "../assets/images/services/electrical.png";
import plumbingImg from "../assets/images/services/plumbing.png";
import paintingImg from "../assets/images/services/painting.png";
import carpentryImg from "../assets/images/services/carpentry.png";
import flooringImg from "../assets/images/services/flooring.png";
import gutterImg from "../assets/images/services/gutter.png";
import pressureImg from "../assets/images/services/pressure.png";
import smartHomeImg from "../assets/images/services/smart-home.png";

export default function Services() {
  const navigate = useNavigate();

  // Book Button
  const BookButton = () => (
    <button
      onClick={() => navigate("/book")}
      className="mt-4 px-4 py-1 text-emerald-700 border border-emerald-700 rounded-full bg-white 
      text-sm font-semibold transition-transform duration-200 hover:scale-105"
    >
      Book
    </button>
  );

  return (
    <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 sm:px-12 lg:px-20">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-900 mb-4 tracking-wide">
          Our Services
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          We provide reliable, professional, and efficient handyman services
          from maintenance and renovation to complete home solutions.
        </p>
      </div>

      {/* 🧰 Indoor Services */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="w-full h-[2px] bg-gradient-to-r from-emerald-700 via-lime-600 to-emerald-700 shadow-md mb-10"></div>

        <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center tracking-wide">
          Indoor Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={acImg}
            title="AC Maintenance & Servicing"
            desc="Filter cleaning, gas refilling, indoor/outdoor unit checks, and cooling efficiency testing."
            extra={<BookButton />}
          />

          <ServiceCard
            image={electricalImg}
            title="Electrical Repairs"
            desc="Switches, sockets, lighting fixtures, ceiling fans, and short-circuit safety checks."
            extra={<BookButton />}
          />

          <ServiceCard
            image={plumbingImg}
            title="Plumbing"
            desc="Leaks, faucet and pipe fixes, shower or toilet repairs, and drain unclogging."
            extra={<BookButton />}
          />
        </div>
      </div>

      {/* 🏡 Home Improvements */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="w-full h-[2px] bg-gradient-to-r from-emerald-700 via-lime-600 to-emerald-700 shadow-md mb-10"></div>

        <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center tracking-wide">
          Home Improvements
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={paintingImg}
            title="Painting & Decorating"
            desc="Interior and exterior painting, wall finishing, waterproof coating, and texture work."
            extra={<BookButton />}
          />

          <ServiceCard
            image={carpentryImg}
            title="Carpentry"
            desc="Doors, locks, hinges, shelves, and furniture repair or installation."
            extra={<BookButton />}
          />

          <ServiceCard
            image={flooringImg}
            title="Flooring & Surface Fixes"
            desc="Laminate or vinyl repairs, tile re-grouting, polishing, and surface restoration."
            extra={<BookButton />}
          />
        </div>
      </div>

      {/* 🌳 Outdoor & Add-on Services */}
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[2px] bg-gradient-to-r from-emerald-700 via-lime-600 to-emerald-700 shadow-md mb-10"></div>

        <h2 className="text-3xl font-bold text-emerald-800 mb-10 text-center tracking-wide">
          Outdoor & Add-on Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            image={gutterImg}
            title="Gutter & Roof Cleaning"
            desc="Debris clearing, leak sealing, and downspout inspection before monsoon or winter."
            extra={<BookButton />}
          />

          <ServiceCard
            image={pressureImg}
            title="Pressure Washing"
            desc="Driveways, patios, exterior walls, and tiled areas cleaned with high-pressure wash."
            extra={<BookButton />}
          />

          <ServiceCard
            image={smartHomeImg}
            title="Smart Home & Fixture Installations"
            desc="TV wall mounting, CCTV setup, smart switch installation, and minor wiring."
            extra={<BookButton />}
          />
        </div>
      </div>
    </section>
  );
}
