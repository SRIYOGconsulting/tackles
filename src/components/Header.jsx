import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-semibold text-green-700">Tackles.pro</h1>
      <nav className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-green-700">Home</Link>
        <Link to="/about" className="hover:text-green-700">About</Link>
        <Link to="/services" className="hover:text-green-700">Services</Link>
        <Link to="/contact" className="hover:text-green-700">Contact</Link>
      </nav>
    </header>
  );
}
