import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Colla from "./pages/Colla";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import Gallery from "./pages/Gallery";
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

      {/* Navbar pública */}
      {!isAdminPage && <Navbar />}

      <Routes>
        {/* WEB PÚBLICA */}
        <Route path="/" element={<Home />} />
        <Route path="/colla" element={<Colla />} />
        <Route path="/drac" element={<Drac />} />
        <Route path="/events" element={<Events />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/merch" element={<Merch />} />
        {/* ADMIN */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/agenda" element={<ProtectedRoute><AdminAgenda /></ProtectedRoute>} />
        <Route path="/admin/galeria" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
        <Route path="/admin/noticies" element={<ProtectedRoute><AdminNews /></ProtectedRoute>} />
        <Route path="/admin/collaboradors" element={<ProtectedRoute><AdminCollaborators /></ProtectedRoute>} />
        <Route path="/admin/merch" element={<ProtectedRoute><AdminMerch /></ProtectedRoute>} />
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