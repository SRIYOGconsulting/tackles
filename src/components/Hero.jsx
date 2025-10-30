export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 bg-green-50">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          Reliable Handyman Services
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          From quick fixes to major repairs — Tackles.pro keeps your home running smoothly.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
          Book a Service
        </button>
      </section>
    );
  }
  