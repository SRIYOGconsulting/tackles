import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { Wrench, Home, Lightbulb } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Plumbing",
      description: "Reliable plumbing repairs and installations.",
      icon: <Wrench />,
    },
    {
      title: "Electrical",
      description: "Wiring, lighting, and full electrical support.",
      icon: <Lightbulb />,
    },
    {
      title: "Home Maintenance",
      description: "General repairs, painting, and furniture fixes.",
      icon: <Home />,
    },
  ];

  return (
    <>
      <Header />
      <main className="p-10 text-center bg-green-50">
        <h1 className="text-4xl font-semibold text-green-800 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
