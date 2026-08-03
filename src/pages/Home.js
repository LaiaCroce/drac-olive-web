import Hero from "../components/Hero/Hero";
import NextEvent from "../components/NextEvent/NextEvent";
import StorySection from "../components/StorySection/StorySection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";
import StatsSection from "../components/Home/StatsSecion";

export default function Home() {
  return (
    <>
      <Hero
        home
        kicker="Foc, tradició i passió"
        title={
          <>
            Drac <span>Olivé</span>
          </>
        }
        description="Colla de foc d’Olesa de Montserrat. Cultura popular, bèstia i comunitat."
        primaryButton={{
          label: "Qui som",
          link: "/qui-som",
        }}
        secondaryButton={{
          label: "La nostra història",
          link: "/historia",
        }}
        images={[
          "/imatges/hero/drac-1.jpg",
          "/imatges/hero/drac-2.jpg",
          "/imatges/hero/drac-3.jpg",
          "/imatges/hero/drac-4.jpg",
        ]}
        interval={5000}
      />
      <NextEvent />
      <StorySection />
      <StatsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

