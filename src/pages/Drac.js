import "./Drac.css";

export default function Drac() {
  return (
    <main className="drac-page">

      {/* HERO */}
      <section className="drac-hero">
        <div className="drac-hero-content">
          <p>La bèstia</p>

          <h1>Drac Olivé</h1>

          <span>
            Foc, tradició i cultura popular pels carrers d’Olesa.
          </span>
        </div>
      </section>

      {/* HISTÒRIA */}
      <section className="drac-history">
        <div className="drac-history-text">
          <p className="section-kicker">Història</p>

          <h2>L’essència del foc.</h2>

          <p>
            El Drac Olivé és el símbol de la nostra colla i representa
            la força, la festa i la cultura popular.
          </p>

          <p>
            Cada actuació és una combinació de foc, música i comunitat,
            mantenint viva la tradició dels correfocs.
          </p>
        </div>

        <div className="drac-history-image"></div>
      </section>

      {/* FITXA */}
      <section className="drac-stats">
        <p className="section-kicker">Fitxa tècnica</p>

        <div className="drac-stats-grid">

          <div className="drac-stat">
            <h3>Pes</h3>
            <span>95kg</span>
          </div>

          <div className="drac-stat">
            <h3>Llargada</h3>
            <span>3.5m</span>
          </div>

          <div className="drac-stat">
            <h3>Punts de foc</h3>
            <span>12</span>
          </div>

          <div className="drac-stat">
            <h3>Portadors</h3>
            <span>2</span>
          </div>

        </div>
      </section>

    </main>
  );
}