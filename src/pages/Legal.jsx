export default function Legal() {
    return (
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-gray-900">Legal</h1>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Privacy Policy</h3>
            <p className="text-gray-600 text-sm mt-2">How we collect, use, and protect your data.</p>
            <a className="text-emerald-700 mt-3 inline-block" href="#">View policy →</a>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Terms & Conditions</h3>
            <p className="text-gray-600 text-sm mt-2">The rules for using our services.</p>
            <a className="text-emerald-700 mt-3 inline-block" href="#">View terms →</a>
          </div>
        </div>
      </section>
    );
  }
  