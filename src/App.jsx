// src/App.jsx
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import WhatsappButton from "./components/WhatsAppButton/WhatsappButton";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* landing principal */}
        <Route path="/" element={<Home />} />
        {/* si luego agregas /reservas, /menu, etc. */}
      </Routes>

      <WhatsappButton />
    </BrowserRouter>
  );
}
