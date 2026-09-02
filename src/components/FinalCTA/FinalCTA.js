import { Link } from "react-router-dom";
import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-content">
        <p>Viu el foc amb nosaltres</p>

        <h2>
          Vine a descobrir
          el Drac Olivé.
        </h2>

        <div className="final-cta-buttons">
          <Link to="/events" className="btn btn-primary">
            Properes actuacions
          </Link>

          <Link to="/contacte" className="btn btn-secondary">
            Contacta'ns
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;