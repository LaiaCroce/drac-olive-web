import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Colla from "./pages/Colla";
import Events from "./pages/Events";
import Merch from "./pages/Merch";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/colla" element={<Colla />} />
        <Route path="/events" element={<Events />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;