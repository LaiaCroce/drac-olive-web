import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import "./AdminHeader.css";

export default function AdminHeader({ showBackButton = false }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <header className="admin-header">

      <div className="admin-header-left">
        <p>Drac Olivé</p>
        <h1>Admin</h1>
      </div>

      <div className="admin-header-actions">
        {showBackButton && (
          <button className="admin-back-button" onClick={() => navigate("/admin/dashboard")}>
            ← Tornar al panell
          </button>
        )}
        <button onClick={handleLogout}>
          Tancar sessió
        </button>
      </div>
     
    </header>
  );
}