import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p  style={{ color: "white", padding: "40px" }}>Carregant...</p>;
  }

  if (!user) {
    return <Navigate to="/admin" replace />;
  }

  return children;

}