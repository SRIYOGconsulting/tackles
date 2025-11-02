export default function Areas() {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Service Areas</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">Local teams ready to help.</p>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <a href="/dubai" className="rounded-xl border p-5 hover:bg-emerald-50 transition">
            <h3 className="font-semibold">Dubai</h3>
            <p className="text-gray-600 text-sm mt-2">Downtown to Jumeirah.</p>
          </a>
          <a href="/sydney" className="rounded-xl border p-5 hover:bg-emerald-50 transition">
            <h3 className="font-semibold">Sydney</h3>
            <p className="text-gray-600 text-sm mt-2">CBD to Northern Beaches.</p>
          </a>
          <a href="/san-francisco" className="rounded-xl border p-5 hover:bg-emerald-50 transition">
            <h3 className="font-semibold">San Francisco</h3>
            <p className="text-gray-600 text-sm mt-2">Across the Bay Area.</p>
          </a>
        </div>
      </section>
    );
  }
  