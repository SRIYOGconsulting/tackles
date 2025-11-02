export default function Blog() {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Handyman Tips & Guides</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">Smart upkeep for busy homeowners.</p>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[
            "5 Easy Fixes to Boost Home Value",
            "Seasonal Maintenance Checklist",
            "DIY vs Pro — When to Call Tackles"
          ].map((t)=>(
            <article key={t} className="rounded-xl border p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="text-gray-600 text-sm mt-2">Short excerpt goes here…</p>
              <a href="#" className="text-emerald-700 mt-3 inline-block">Read more →</a>
            </article>
          ))}
        </div>
      </section>
    );
  }
  