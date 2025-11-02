export default function About() {
    return (
      <>
        <section className="container py-12">
          <h1 className="text-3xl font-bold text-gray-900">About Tackles</h1>
          <p className="mt-4 text-gray-700 max-w-2xl">
            We fix, build, and improve—so you don’t have to. Local, background-checked pros with honest pricing.
          </p>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">Our Story</h3>
              <p className="text-gray-600 mt-2 text-sm">Started by craftsmen who care about doing it right.</p>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">Meet the Team</h3>
              <p className="text-gray-600 mt-2 text-sm">Experienced handymen across Dubai, Sydney, and SF.</p>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">Testimonials</h3>
              <p className="text-gray-600 mt-2 text-sm">“On time, clean work, fair price.”</p>
            </div>
          </div>
        </section>
      </>
    );
  }
  