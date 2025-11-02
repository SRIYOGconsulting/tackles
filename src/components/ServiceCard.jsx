export default function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-xl border p-5 hover:shadow-sm transition">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}
