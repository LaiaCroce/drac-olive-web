import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/admin/dashboard");

    } catch (error) {
      console.error(error);
      alert("Error al login");
    }
  };

  return (
    <main className="admin-login">

      <form className="admin-form" onSubmit={handleLogin}>

        <p>Admin</p>

        <h1>Entrar</h1>

        <input
          type="email"
          placeholder="Correu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contrasenya"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>

      </form>

    </main>
  );
}