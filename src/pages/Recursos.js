import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import RecursosGrid from "../components/RecursosGrid/RecursosGrid";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Recursos() {
  return (
    <main>

      <Hero
        kicker="Drac Olivé"
        title="Recursos Didàctics"
        description="Materials i recursos per descobrir el món del Drac Olivé i la cultura popular."
      />

      <IntroSection
        eyebrow="Aprendre jugant"
        title="Descobreix el nostre patrimoni"
        text="Aquest espai reunirà recursos educatius, fitxes, contes, activitats i materials per a escoles, famílies i totes les persones que vulguin conèixer millor el Drac Olivé."
      />

      <RecursosGrid />

      <ImageBanner
        eyebrow="Cultura popular"
        quote="Conèixer el patrimoni és la millor manera de preservar-lo."
        text="Aquest espai quedarà reservat per a una fotografia representativa del Drac amb infants o activitats educatives."
      />

      <Footer />

    </main>
  );
}