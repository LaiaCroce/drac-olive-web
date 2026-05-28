import { Link } from "react-router-dom";
import "./AdminDashboard.css";
import AdminHeader from "../components/Admin/AdminHeader";

export default function AdminDashboard() {
  return (
    <main className="admin-dashboard">
      <AdminHeader />

      <section className="admin-dashboard-header">
        <p>Zona admin</p>
        <h1>Panell de control</h1>
        <span>Gestiona els continguts del Drac Olivé.</span>
      </section>

      <section className="admin-dashboard-grid">
        <Link to="/admin/agenda" className="admin-dashboard-card">
          <h2>Agenda</h2>
          <p>Crear, editar i eliminar esdeveniments.</p>
        </Link>

        <Link to="/admin/galeria" className="admin-dashboard-card">
          <h2>Galeria</h2>
          <p>Gestionar fotografies i moments destacats.</p>
        </Link>

         <Link to="/admin/noticies" className="admin-dashboard-card">
          <h2>Notícies</h2>
          <p>Publicar i gestionar notícies i comunicats.</p>
        </Link>

         <Link to="/admin/collaboradors" className="admin-dashboard-card">
          <h2>Col·laboradors</h2>
          <p>Gestionar col·laboradors i patrocinadors.</p>
        </Link>

        <Link to="/admin/merch" className="admin-dashboard-card">
          <h2>Merch</h2>
          <p>Gestionar productes de merchandising.</p>
        </Link>

      </section>
    </main>
  );
}