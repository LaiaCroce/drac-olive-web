import Hero from "../components/Hero/Hero";
import NextEvent from "../components/NextEvent/NextEvent";
import StorySection from "../components/StorySection/StorySection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";
import StatsSection from "../components/Home/StatsSecion";

export default function Home() {
  return (
    <>
      <Hero />
      <NextEvent />
      <StorySection />
      <StatsSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

