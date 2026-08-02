import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollaOpen, setIsCollaOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCollaOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsCollaOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      {/* ESQUERRA: LOGO */}
      <div className="navbar-left">
        <Link
          to="/"
          className="navbar-logo"
          aria-label="Anar a la pàgina d'inici"
          onClick={closeMenu}
        >
          <img
            src="/imatges/Logo.png"
            alt="Logo del Drac Olivé"
          />
        </Link>
      </div>
      {/* CENTRE: MENÚ */}
      <div
        id="navbar-navigation"
        className={`navbar-center ${isMenuOpen ? "navbar-center--open" : ""}`}
      >
        <div className="navbar-links">
          <NavLink to="/qui-som" onClick={closeMenu}>
            Qui som
          </NavLink>
          <NavLink to="/historia" onClick={closeMenu}>
            Història
          </NavLink>
          <div
            className={`navbar-dropdown ${
              isCollaOpen ? "navbar-dropdown--open" : ""
            }`}
          >
            <button
              type="button"
              className={`navbar-dropdown-trigger ${
                location.pathname.startsWith("/colla") ? "active" : ""
              }`}
              onClick={() => setIsCollaOpen((current) => !current)}
              aria-expanded={isCollaOpen}
            >
              La colla
              <span
                className="navbar-dropdown-arrow"
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            <div className="navbar-dropdown-menu">
              <NavLink to="/colla/piro" onClick={closeMenu}>
                Piro
              </NavLink>
              <NavLink to="/colla/fogosons" onClick={closeMenu}>
                Fogosons
              </NavLink>
            </div>
          </div>
          <NavLink to="/events" onClick={closeMenu}>
            Agenda
          </NavLink>
          <NavLink to="/galeria" onClick={closeMenu}>
            Galeria
          </NavLink>
          <NavLink to="/merch" onClick={closeMenu}>
            Merch
          </NavLink>
          <NavLink to="/noticies" onClick={closeMenu}>
            Notícies
          </NavLink>
        </div>
        {/* En mòbil, les xarxes apareixen dins del menú */}
        <div className="navbar-mobile-socials">
          <SocialLinks />
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-socials">
          <SocialLinks />
        </div>
        <button
          type="button"
          className={`navbar-toggle ${isMenuOpen ? "navbar-toggle--open" : ""}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? "Tancar el menú" : "Obrir el menú"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

function SocialLinks() {
  return (
    <>
      <a
        href="https://www.instagram.com/dracolive?igsh=bXgzZ2FpcGJmZnJt"
        target="_blank"
        rel="noreferrer"
        className="social-link social-link--instagram"
        aria-label="Instagram del Drac Olivé"
        title="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.tiktok.com/@dracolive_?_r=1&_t=ZG-98XtKr0mj8S"
        target="_blank"
        rel="noreferrer"
        className="social-link social-link--tiktok"
        aria-label="TikTok del Drac Olivé"
        title="TikTok"
      >
        <FaTiktok />
      </a>

      <a
        href="https://www.youtube.com/@DracOlive2016"
        target="_blank"
        rel="noreferrer"
        className="social-link social-link--youtube"
        aria-label="YouTube del Drac Olivé"
        title="YouTube"
      >
        <FaYoutube />
      </a>

      <a
        href="https://www.instagram.com/fogosons?igsh=aTN3dWpnNzhrbm1k"
        target="_blank"
        rel="noreferrer"
        className="social-link social-link--instagram social-link--fogosons"
        aria-label="Instagram de Fogosons"
        title="Instagram Fogosons"
      >
        <FaInstagram />
      </a>
    </>
  );
}
export default Navbar;