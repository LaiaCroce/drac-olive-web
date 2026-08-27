import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

import "./Drac.css";

export default function Drac() {
  return (
    <main>

      <Hero
        kicker="La nostra bèstia"
        title="El Drac Olivé"
        description="El protagonista de les nostres actuacions. Foc, tradició i cultura popular des del 2004."
      />

      <IntroSection
        eyebrow="El símbol de la colla"
        title="Molt més que una bèstia de foc"
        text="Aquest espai estarà dedicat exclusivament al Drac Olivé. Aquí explicarem la seva història, la fitxa tècnica, curiositats i tot allò que el fa únic."
      />

      <FeatureSection
        eyebrow="La història"
        title="Com va néixer el Drac"
        paragraphs={[
          "Aquí explicarem els orígens del Drac Olivé.",
          "Qui el va construir, per què es va crear i com ha evolucionat amb els anys."
        ]}
        image=""
        imageAlt="El Drac Olivé"
      />

      <section className="dragon-specs">

        <div className="container">

          <div className="dragon-specs__heading">

            <p>Fitxa tècnica</p>

            <h2>Característiques</h2>

          </div>

          <div className="dragon-specs__grid">

            <div className="dragon-spec">
              <span>Nom</span>
              <strong>Drac Olivé</strong>
            </div>

            <div className="dragon-spec">
              <span>Any</span>
              <strong>2004</strong>
            </div>

            <div className="dragon-spec">
              <span>Constructor</span>
              <strong>Per definir</strong>
            </div>

            <div className="dragon-spec">
              <span>Pes</span>
              <strong>---</strong>
            </div>

            <div className="dragon-spec">
              <span>Alçada</span>
              <strong>---</strong>
            </div>

            <div className="dragon-spec">
              <span>Punts de foc</span>
              <strong>---</strong>
            </div>

          </div>

        </div>

      </section>

      <FeatureSection
        reverse
        eyebrow="Curiositats"
        title="Un símbol del poble"
        paragraphs={[
          "Aquí hi podrem explicar curiositats del Drac, restauracions, aniversaris o anècdotes.",
          "També hi podrem afegir fotografies històriques."
        ]}
        image=""
        imageAlt="Curiositats del Drac"
      />

      <ImageBanner
        eyebrow="Drac Olivé"
        quote="Quan el Drac surt al carrer, el poble s'encén."
        text="Aquest espai quedarà reservat per a una fotografia espectacular del Drac."
      />

      <Footer />

    </main>
  );
}