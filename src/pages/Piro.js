import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Piro() {
  return (
    <main>
      <Hero
        kicker="Drac Olivé"
        title="Piro"
        description="Foc, tradició i espectacle. La secció que dona vida al Drac Olivé a cada sortida."
      />

      <IntroSection
        eyebrow="La secció de foc"
        title="El foc del Drac"
        text="Aquest espai servirà per explicar què és Piro, qui forma la secció i quin paper té dins del Drac Olivé. Més endavant hi afegirem el text definitiu."
      />

      <FeatureSection
        eyebrow="La bèstia"
        title="El Drac Olivé"
        paragraphs={[
          "Aquí explicarem les característiques del Drac, la seva construcció, els portadors i tot allò que el converteix en el protagonista de les nostres actuacions.",
          "Aquest text és provisional i serà substituït quan tinguem tota la informació definitiva.",
        ]}
        image=""
        imageAlt="Drac Olivé"
      />

      <FeatureSection
        reverse
        eyebrow="Abans de cada sortida"
        title="Preparació i seguretat"
        paragraphs={[
          "El foc requereix preparació, coordinació i responsabilitat. Aquest apartat explicarà com es prepara una actuació i la importància de la seguretat.",
          "També podrem parlar de la pirotècnia, els protocols i les diferents funcions dels membres de la secció.",
        ]}
        image=""
        imageAlt="Preparació d'una actuació del Drac Olivé"
      />

      <FeatureSection
        eyebrow="Al carrer"
        title="Correfocs i actuacions"
        paragraphs={[
          "Aquí explicarem què passa quan el Drac surt al carrer: correfocs, trobades de bestiari, festes populars i altres actuacions.",
          "Més endavant podrem incorporar fotografies reals i informació sobre les sortides més representatives.",
        ]}
        image=""
        imageAlt="Drac Olivé durant un correfoc"
      />

      <ImageBanner
        eyebrow="Foc, tradició i cultura"
        quote="Quan el Drac surt, el carrer s’encén"
        text="Espai preparat per incorporar una fotografia espectacular del Drac en acció."
      />

      <Footer />

    </main>
  );
}