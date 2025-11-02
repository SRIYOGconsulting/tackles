import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-12">
        <h2 className="text-2xl font-bold text-gray-900">Popular Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <ServiceCard title="Plumbing & Electrical" desc="Leaks, fixture replacements, safe fixes." />
          <ServiceCard title="Carpentry & Assembly" desc="Doors, locks, shelves, furniture." />
          <ServiceCard title="Painting & Decorating" desc="Clean finishes and color updates." />
        </div>
      </section>
    </>
  );
}
