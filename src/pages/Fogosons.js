import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Fogosons() {
  return (
    <main>
      <Hero
        kicker="La colla · Fogosons"
        title="Fogosons"
        description="La secció musical del Drac Olivé. Ritme, percussió i energia per acompanyar cada sortida."
      />

      <IntroSection
        eyebrow="La secció musical"
        title="El ritme que acompanya el foc"
        text="Aquest espai servirà per explicar qui són els Fogosons, com funciona la batucada i quin paper tenen dins de les actuacions del Drac Olivé."
      />

      <FeatureSection
        eyebrow="La batucada"
        title="Música que es viu al carrer"
        paragraphs={[
          "Aquí explicarem què és Fogosons i com la percussió acompanya el Drac a les sortides, cercaviles i trobades.",
          "Més endavant hi afegirem el text definitiu sobre la seva història, el tipus de repertori i l'ambient que volen transmetre.",
        ]}
        image=""
        imageAlt="Fogosons actuant al carrer"
      />

      <FeatureSection
        reverse
        eyebrow="Assajos i preparació"
        title="Darrere de cada ritme"
        paragraphs={[
          "Aquest bloc estarà dedicat als assajos, la coordinació entre músics i la preparació abans de cada actuació.",
          "També podrem explicar com s'organitza el grup i com es prepara el repertori per a cada sortida.",
        ]}
        image=""
        imageAlt="Assaig de Fogosons"
      />

      <FeatureSection
        eyebrow="Instruments"
        title="El so de Fogosons"
        paragraphs={[
          "Aquí podrem presentar els diferents instruments de percussió que formen la batucada i explicar quin paper té cadascun dins del conjunt.",
          "Més endavant hi afegirem les fotografies i els noms dels instruments reals que utilitzeu.",
        ]}
        image=""
        imageAlt="Instruments de Fogosons"
      />

      <FeatureSection
        reverse
        eyebrow="En actuació"
        title="Ritme, carrer i comunitat"
        paragraphs={[
          "Aquest apartat explicarà com viuen les actuacions, quin paper tenen durant els correfocs i com connecten amb el públic.",
          "També hi podrem destacar sortides especials, trobades o col·laboracions.",
        ]}
        image=""
        imageAlt="Fogosons durant una actuació"
      />

      <ImageBanner
        eyebrow="Fogosons"
        quote="Quan sona la percussió, el carrer es mou"
        text="Espai preparat per incorporar una fotografia potent de la batucada en acció."
      />

      <Footer />
    </main>
  );
}