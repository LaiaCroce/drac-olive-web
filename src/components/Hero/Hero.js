import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-kicker">Foc, tradició i passió</p>

        <h1>
          Drac <span>Olivé</span>
        </h1>

        <p className="hero-text">
          Colla de foc d’Olesa de Montserrat. Cultura popular, bèstia i comunitat.
        </p>

        <div className="hero-buttons">
          <Link to="/colla" className="btn btn-primary">
            Qui som
          </Link>

          <Link to="/events" className="btn btn-secondary">
            Properes actuacions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;