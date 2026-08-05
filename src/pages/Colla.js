import Hero from "../components/Hero/Hero";
import FeatureSection from "../components/FeatureSection/FeatureSection";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Colla() {
  return (
    <main>
      <Hero
        kicker="Foc i ritme"
        title="La colla"
        description="Les persones que fan possible el Drac Olivé. Una colla formada per dues seccions que treballen juntes a cada actuació: Piro i Fogosons."
      />

      <FeatureSection
        eyebrow="Foc i tradició"
        title="Piro"
        paragraphs={[
          "La secció Piro és l’encarregada de donar vida al Drac Olivé i de preparar tot el que envolta les actuacions de foc.",
          "Més endavant hi afegirem la informació definitiva sobre la pirotècnia, la seguretat, els portadors, el manteniment del Drac i l’organització dels correfocs.",
        ]}
        image=""
        imageAlt="Secció Piro del Drac Olivé"
        button={{
          label: "Descobreix Piro",
          link: "/colla/piro",
        }}
      />

      <FeatureSection
        reverse
        eyebrow="El ritme del Drac"
        title="Fogosons"
        paragraphs={[
          "Fogosons és la secció musical de la colla, encarregada d’acompanyar les sortides amb ritme, percussió i energia.",
          "Més endavant hi afegirem la informació definitiva sobre la seva història, els instruments, els assajos i el paper de la batucada durant les actuacions.",
        ]}
        image=""
        imageAlt="Batucada Fogosons"
        button={{
          label: "Descobreix Fogosons",
          link: "/colla/fogosons",
        }}
      />

      <ImageBanner
        eyebrow="Una sola colla"
        quote="Foc i ritme treballant junts"
        text="Piro i Fogosons comparteixen cada sortida per convertir-la en una experiència de cultura popular, música i foc."
        image=""
      />

      <Footer />
    </main>
  );
}