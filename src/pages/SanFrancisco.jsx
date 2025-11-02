import ServiceCard from "../components/ServiceCard.jsx";

export default function SanFrancisco() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900">San Francisco Handyman Services</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">Across SoMa and the wider Bay Area.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <ServiceCard title="Electrical & Smart Devices" desc="Light fixtures, dimmers, installs." />
        <ServiceCard title="Minor Plumbing" desc="Faucets, traps, leaks." />
        <ServiceCard title="Home Upgrades" desc="Mounting, shelving, small remodel help." />
      </div>
    </section>
  );
}
