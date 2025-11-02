import ServiceCard from "../components/ServiceCard.jsx";

export default function Dubai() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900">Dubai Handyman Services</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">Serving Downtown to Jumeirah with rapid response.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <ServiceCard title="AC Filters & Minor HVAC" desc="Basic cleaning and filter swaps." />
        <ServiceCard title="Plumbing Repairs" desc="Leaks, faucet changes, traps." />
        <ServiceCard title="Electrical Fixes" desc="Lights, sockets, switch issues." />
      </div>
    </section>
  );
}
