import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    {
      number: "+20",
      label: "Anys d'història",
    },
    {
      number: "+30",
      label: "Membres",
    },
    {
      number: "+100",
      label: "Actuacions",
    }
  ];

  return (
    <section className="stats-section">
      <p>EL DRAC EN XIFRES</p>
      <h2>Més de vint anys fent cremar Olesa</h2>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <h3>{stat.number}</h3>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}