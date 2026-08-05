import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import Footer from "../components/Footer/Footer";

const provisionalHistory = [
  {
    year: "2004",
    title: "El naixement del Drac",
    text: "Aquí explicarem com va començar el projecte, qui va impulsar la creació de la colla i com va néixer el Drac Olivé.",
    image: "",
  },
  {
    year: "2008",
    title: "Els primers anys",
    text: "En aquest apartat recollirem les primeres sortides, les primeres trobades i els moments que van ajudar a consolidar la colla.",
    image: "",
  },
  {
    year: "2015",
    title: "Una colla que creix",
    text: "Aquí podrem explicar l’evolució de l’entitat, l’augment de participants i la consolidació de les diferents seccions.",
    image: "",
  },
  {
    year: "2024",
    title: "Vint anys de foc",
    text: "Aquest bloc estarà dedicat a la celebració del vintè aniversari i a tot el que ha significat arribar fins aquí.",
    image: "",
  },
];

export default function Historia() {
  return (
    <main>
      <Hero
        kicker="Des de 2004"
        title="Història"
        description="Més de vint anys portant foc, música i cultura popular als carrers d’Olesa de Montserrat."
      />

      <Timeline events={provisionalHistory} />

      <FinalCTA />
      <Footer />
    </main>
  );
}