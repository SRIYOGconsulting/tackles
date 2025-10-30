import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Areas from "./pages/Areas";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Dubai from "./pages/Dubai";
import Sydney from "./pages/Sydney";
import SanFrancisco from "./pages/SanFrancisco";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/sydney" element={<Sydney />} />
        <Route path="/sanfrancisco" element={<SanFrancisco />} />
      </Routes>
    </Router>
  );
}
