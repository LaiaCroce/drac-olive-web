import "./AdminDashboard.css";
import CreateEventForm from "../components/Admin/CreateEventForm";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="admin-dashboard">
      <section className="admin-dashboard-header">
        <p>Zona admin</p>
        <h1>Panell de control</h1>
        <span>Gestiona els continguts del Drac Olivé.</span>
        <button className="admin-logout" onClick={handleLogout}>
          Tancar sessió
        </button>
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
      <CreateEventForm />
    </main>
  );
}