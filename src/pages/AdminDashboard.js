import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <main className="admin-dashboard">
      <section className="admin-dashboard-header">
        <p>Zona admin</p>
        <h1>Panell de control</h1>
        <span>Gestiona els continguts del Drac Olivé.</span>
      </section>

      <section className="admin-dashboard-grid">
        <div className="admin-dashboard-card">
          <h2>Agenda</h2>
          <p>Crear, editar i eliminar esdeveniments.</p>
        </div>

        <div className="admin-dashboard-card">
          <h2>Galeria</h2>
          <p>Gestionar fotografies i moments destacats.</p>
        </div>

        <div className="admin-dashboard-card">
          <h2>Merch</h2>
          <p>Gestionar productes de merchandising.</p>
        </div>
      </section>
    </main>
  );
}