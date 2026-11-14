import { Link } from "react-router-dom";

import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import "./NotFound.css";

export default function NotFound() {
  return (
    <main>
      <Hero
        kicker="Error 404"
        title="Aquí no hi ha foc"
        description="La pàgina que busques no existeix o s'ha mogut. Torna a l'inici o consulta l'agenda de sortides."
      />

      <section className="not-found">
        <div className="container not-found__actions">
          <Link to="/" className="button-primary">
            Tornar a l'inici
          </Link>

          <Link to="/events" className="button-secondary">
            Veure agenda
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
