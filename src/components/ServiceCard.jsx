export default function ServiceCard({ title, description, icon }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition text-center">
        {icon && <div className="text-4xl mb-3 text-green-700">{icon}</div>}
        <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }
  