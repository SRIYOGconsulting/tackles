import { NavLink } from "react-router-dom";

const link = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-emerald-900" : "text-emerald-700"} hover:bg-emerald-50`;

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between h-16">
        <NavLink to="/" className="text-xl font-semibold text-emerald-800">Tackles</NavLink>
        <nav className="flex gap-2">
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/services" className={link}>Services</NavLink>
          <NavLink to="/pricing" className={link}>Pricing</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/blog" className={link}>Blog</NavLink>
          <NavLink to="/areas" className={link}>Areas</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>
          <NavLink to="/legal" className={link}>Legal</NavLink>
        </nav>
      </div>
    </header>
  );
}
