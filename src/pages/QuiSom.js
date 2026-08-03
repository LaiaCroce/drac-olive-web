import Hero from "../components/Hero/Hero";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";

export default function QuiSom() {
  return (
    <main>
      <Hero
        kicker="Drac Olivé"
        title="Qui som"
        description="Som una colla de cultura popular d’Olesa de Montserrat formada per més de trenta persones, unides pel foc, la música i les ganes de mantenir viva la tradició."
      />

      <FeatureSection
        eyebrow="La nostra gent"
        title="Més que una colla"
        paragraphs={[
          "El Drac Olivé és una entitat formada per persones de diferents edats que comparteixen una mateixa passió: la cultura popular, el foc i la música.",
          "Cada actuació és el resultat del treball conjunt de tota la colla, tant en la preparació prèvia com durant els correfocs, cercaviles i trobades.",
        ]}
        image=" "
        imageAlt="Membres de la colla del Drac Olivé"
        button={{
          label: "Coneix la colla",
          link: "/colla",
        }}
      />

      <FinalCTA />
      <Footer />
    </main>
  );
}