import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";



import Home from "./pages/Home";
import QuiSom from "./pages/QuiSom";
import Historia from "./pages/Historia";
import Colla from "./pages/Colla";
import Piro from "./pages/Piro";
import Fogosons from "./pages/Fogosons";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Merch from "./pages/Merch";
import Noticies from "./pages/Noticies";
import Drac from "./pages/Drac";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAgenda from "./pages/AdminAgenda";
import AdminGallery from "./pages/AdminGallery";
import AdminNews from "./pages/AdminNews";
import AdminCollaborators from "./pages/AdminCollaborators";
import AdminMerch from "./pages/AdminMerch";

function Layout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* WEB PÚBLICA */}
        <Route path="/" element={<Home />} />
        <Route path="/qui-som" element={<QuiSom />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/colla" element={<Colla />} />
        <Route path="/colla/piro" element={<Piro />} />
        <Route path="/colla/fogosons" element={<Fogosons />} />
        <Route path="/events" element={<Events />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/noticies" element={<Noticies />} />
        {/* Conservem la pàgina del Drac com a ruta interna */}
        <Route path="/drac" element={<Drac />} />
        {/* ADMIN */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/agenda"
          element={
            <ProtectedRoute>
              <AdminAgenda />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/galeria"
          element={
            <ProtectedRoute>
              <AdminGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/noticies"
          element={
            <ProtectedRoute>
              <AdminNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/collaboradors"
          element={
            <ProtectedRoute>
              <AdminCollaborators />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/merch"
          element={
            <ProtectedRoute>
              <AdminMerch />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;