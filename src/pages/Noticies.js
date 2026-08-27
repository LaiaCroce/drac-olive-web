import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import NewsGrid from "../components/NewsGrid/NewsGrid";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Noticies() {
  return (
    <main>
      <Hero
        kicker="Drac Olivé"
        title="Notícies"
        description="Segueix tota l'actualitat de la colla."
      />

      <IntroSection
        eyebrow="Actualitat"
        title="Les últimes novetats"
        text="Aquí publicarem les notícies, comunicats i novetats relacionades amb el Drac Olivé i Fogosons."
      />

      <NewsGrid />

      <ImageBanner
        eyebrow="Sempre en moviment"
        quote="Cada actuació és una nova història."
        text="Aquest espai quedarà preparat per incorporar una fotografia destacada."
      />

      <Footer />
    </main>
  );
}