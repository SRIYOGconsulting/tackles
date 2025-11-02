export default function Pricing() {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Pricing & Estimates</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">
          Fair prices. Honest work. No surprises. Free quotes before any job begins.
        </p>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Hourly</h3>
            <p className="text-gray-600 mt-2 text-sm">From $80/hr (varies by city/service).</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Half-Day</h3>
            <p className="text-gray-600 mt-2 text-sm">Best for a punch list of small tasks.</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Full-Day</h3>
            <p className="text-gray-600 mt-2 text-sm">Ideal for larger refresh/mini-renovations.</p>
          </div>
        </div>
  
        <a href="/contact" className="inline-block mt-8 px-4 py-2 rounded-md bg-emerald-700 text-white">
          Request a Free Quote
        </a>
      </section>
    );
  }
  