import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🔥 Drac Olivé
      </div>

      <div className="navbar-links">
        <Link to="/">Inici</Link>
        <Link to="/colla">Colla</Link>
        <Link to="/events">Agenda</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/merch">Merch</Link>
      </div>
    </nav>
  );
}

export default Navbar;