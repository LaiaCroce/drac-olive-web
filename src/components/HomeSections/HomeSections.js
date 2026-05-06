import { Link } from "react-router-dom";
import "./HomeSections.css";

function HomeSections() {
  const sections = [
    {
      title: "La Colla",
      text: "Coneix qui som, la nostra història i la gent que dona vida al foc.",
      link: "/colla",
    },
    {
      title: "El Drac Olivé",
      text: "Descobreix la nostra bèstia, la seva història i el seu caràcter.",
      link: "/drac",
    },
    {
      title: "Esdeveniments",
      text: "Consulta les properes sortides, correfocs i trobades.",
      link: "/events",
    },
    {
      title: "Merchandising",
      text: "Productes oficials del Drac Olivé per portar la colla amb tu.",
      link: "/merch",
    },
  ];

  return (
    <section className="home-sections">
      <div className="home-sections-header">
        <p>Explora el Drac Olivé</p>
        <h2>Foc, bèstia i comunitat</h2>
      </div>

      <div className="home-sections-grid">
        {sections.map((section) => (
          <Link to={section.link} className="home-section-card" key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.text}</p>
            <span>Descobrir →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomeSections;