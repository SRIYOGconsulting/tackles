export default function Projects() {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Our Work</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">Recent transformations and featured jobs.</p>
  
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[1,2,3,4,5,6].map((i)=>(
            <div key={i} className="rounded-xl border p-5">
              <div className="aspect-video bg-gray-100 rounded-md" />
              <h3 className="font-semibold mt-3">Project #{i}</h3>
              <p className="text-gray-600 text-sm mt-1">Before/after highlights and summary.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  