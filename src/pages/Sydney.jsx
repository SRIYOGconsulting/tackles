import ServiceCard from "../components/ServiceCard.jsx";

export default function Sydney() {
  return (
    <section className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900">Sydney Handyman Services</h1>
      <p className="mt-4 text-gray-700 max-w-2xl">From the CBD to the Northern Beaches.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <ServiceCard title="Painting & Patching" desc="Interior walls, trims, neat finishes." />
        <ServiceCard title="Carpentry & Assembly" desc="Flatpacks, shelving, doors & locks." />
        <ServiceCard title="Outdoor Care" desc="Deck touch-ups, pressure washing." />
      </div>
    </section>
  );
}
