import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import MerchGrid from "../components/MerchGrid/MerchGrid";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Merch() {
  return (
    <main>
      <Hero
        kicker="Drac Olivé"
        title="Merch"
        description="Porta una mica del Drac amb tu. Descobreix el nostre merchandising."
      />

      <IntroSection
        eyebrow="Merchandising"
        title="Porta el Drac amb tu"
        text="Aquí podràs veure els productes de merchandising de la colla. Més endavant hi afegirem les fotografies, preus i informació definitiva."
      />

      <MerchGrid />

      <ImageBanner
        eyebrow="Drac Olivé"
        quote="Foc, cultura i identitat"
        text="Aquest espai quedarà preparat per incorporar una fotografia del merchandising o de la colla."
      />

      <Footer />
    </main>
  );
}