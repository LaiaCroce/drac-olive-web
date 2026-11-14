import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AdminLogin.css";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/dashboard");

    } catch (error) {
      console.error(error);
      alert("No s'ha pogut iniciar la sessió. Revisa el correu i la contrasenya.");
      setIsSubmitting(false);
    }
  };

  // Si ja hi ha la sessió iniciada, no cal tornar a demanar-la.
  if (!loading && user) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <main className="admin-login">

      <form className="admin-form" onSubmit={handleLogin}>

        <p>Admin</p>

        <h1>Entrar</h1>

        <input
          type="email"
          placeholder="Correu"
          aria-label="Correu"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contrasenya"
          aria-label="Contrasenya"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrant…" : "Entrar"}
        </button>

      </form>

    </main>
  );
}