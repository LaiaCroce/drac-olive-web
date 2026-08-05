import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__columns">
          <section className="footer__column">
            <p className="footer__heading">Navegació</p>

            <nav className="footer__links" aria-label="Navegació del peu">
              <Link to="/qui-som">Qui som</Link>
              <Link to="/historia">Història</Link>
              <Link to="/events">Agenda</Link>
              <Link to="/galeria">Galeria</Link>
            </nav>
          </section>

          <section className="footer__column">
            <p className="footer__heading">La colla</p>

            <nav className="footer__links" aria-label="Seccions de la colla">
              <Link to="/colla/piro">Piro</Link>
              <Link to="/colla/fogosons">Fogosons</Link>
              <Link to="/merch">Merchandising</Link>
              <Link to="/noticies">Notícies</Link>
            </nav>
          </section>

          <section className="footer__column footer__column--contact">
            <p className="footer__heading">Parlem?</p>

            <p className="footer__text">
              Vols formar part de la colla, contractar una actuació o
              saber-ne més?
            </p>

            <Link to="/contacte" className="footer__contact-link">
              Contacta’ns →
            </Link>
          </section>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Drac Olivé. Tots els drets reservats.
          </p>

          <p>
            Creat amb ❤️‍🔥 per{" "}
            <a
              href="https://github.com/LaiaCroce"
              target="_blank"
              rel="noreferrer"
            >
              @LaiaCroce
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;