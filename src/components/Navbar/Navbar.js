import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🔥 Drac Olivé
      </Link>

      <div className="navbar-links">
        <Link to="/">Inici</Link>
        <Link to="/qui-som">Qui som</Link>
        <Link to="/historia">Història</Link>

        <div className="navbar-dropdown">
          <Link to="/colla" className="navbar-dropdown-trigger">
            La colla ▾
          </Link>

          <div className="navbar-dropdown-menu">
            <Link to="/colla/piro">Piro</Link>
            <Link to="/colla/fogosons">Fogosons</Link>
          </div>
        </div>

        <Link to="/events">Agenda</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/merch">Merch</Link>
        <Link to="/noticies">Notícies</Link>
      </div>
    </nav>
  );
}

export default Navbar;