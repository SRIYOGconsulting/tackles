import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/areas">Service Areas</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Header;
