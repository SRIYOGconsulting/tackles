import ServiceCard from "../components/ServiceCard.jsx";

export default function Services() {
  return (
    <>
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">
          Repairs, improvements, and outdoor work—handled safely and efficiently.
        </p>

        <h2 className="text-xl font-semibold mt-8">Repairs & Maintenance</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <ServiceCard title="Electrical Repairs" desc="Switches, sockets, lights, safety checks." />
          <ServiceCard title="Plumbing" desc="Leaks, faucets, traps, fixture replacements." />
          <ServiceCard title="Carpentry" desc="Doors, locks, hinges, shelves." />
        </div>

        <h2 className="text-xl font-semibold mt-10">Home Improvements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <ServiceCard title="Painting & Decorating" desc="Clean edges, durable finishes." />
          <ServiceCard title="Flooring" desc="Laminate, vinyl, minor repairs." />
          <ServiceCard title="Kitchen & Bath Upgrades" desc="Hardware swaps, caulking, small tiling." />
        </div>

        <h2 className="text-xl font-semibold mt-10">Outdoor</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <ServiceCard title="Fence & Deck" desc="Repairs, board replacement, staining." />
          <ServiceCard title="Gutter Cleaning" desc="Debris removal, downspout checks." />
          <ServiceCard title="Pressure Washing" desc="Driveways, patios, siding." />
        </div>
      </section>
    </>
  );
}
