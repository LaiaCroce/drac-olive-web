import "./RecursosGrid.css";

const resources = [
  {
    id: 1,
    icon: "📄",
    title: "Fitxa del Drac",
    description: "Informació tècnica completa del Drac Olivé.",
    button: "Descarregar",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Dibuixos per pintar",
    description: "Recull de dibuixos del Drac per als més petits.",
    button: "Veure",
  },
  {
    id: 3,
    icon: "📚",
    title: "Conte del Drac",
    description: "La història del Drac Olivé explicada als infants.",
    button: "Llegir",
  },
  {
    id: 4,
    icon: "🏫",
    title: "Material per escoles",
    description: "Recursos educatius per treballar el bestiari.",
    button: "Properament",
  },
  {
    id: 5,
    icon: "🎥",
    title: "Vídeos",
    description: "Recull de vídeos de les nostres actuacions.",
    button: "Veure",
  },
  {
    id: 6,
    icon: "⬇️",
    title: "Documents",
    description: "Altres documents descarregables de la colla.",
    button: "Descarregar",
  },
];

export default function RecursosGrid() {
  return (
    <section className="resources-grid">
      <div className="container">

        <div className="resources-grid__cards">
          {resources.map((resource) => (
            <article
              key={resource.id}
              className="resource-card"
            >
              <div className="resource-card__icon">
                {resource.icon}
              </div>

              <h3>{resource.title}</h3>

              <p>{resource.description}</p>

              <button className="button-secondary">
                {resource.button}
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}