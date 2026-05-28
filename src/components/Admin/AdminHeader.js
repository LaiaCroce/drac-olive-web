import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import "./AdminHeader.css";

export default function AdminHeader() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  return (
    <header className="admin-header">

      <div className="admin-header-left">
        <p>Drac Olivé</p>
        <h1>Admin</h1>
      </div>

      <button onClick={handleLogout}>
        Tancar sessió
      </button>

    </header>
  );
}