export default function Contact() {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-gray-700 max-w-2xl">Tell us what you need, we’ll handle the rest.</p>
  
        <form className="grid gap-4 max-w-lg mt-8">
          <input className="border rounded-md px-3 py-2" placeholder="Name" />
          <input className="border rounded-md px-3 py-2" placeholder="Email" type="email" />
          <input className="border rounded-md px-3 py-2" placeholder="City (Dubai / Sydney / SF)" />
          <textarea className="border rounded-md px-3 py-2" rows="4" placeholder="Service needed & message" />
          <button className="bg-emerald-700 text-white px-4 py-2 rounded-md w-fit">Send</button>
        </form>
  
        <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Dubai</h3>
            <p className="text-gray-600 mt-2">+971 4 123 4567</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Sydney</h3>
            <p className="text-gray-600 mt-2">+61 2 5550 6789</p>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">San Francisco</h3>
            <p className="text-gray-600 mt-2">+1 (415) 555-7890</p>
          </div>
        </div>
      </section>
    );
  }
  