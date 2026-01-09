import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Packages from "./pages/packages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Booking from "./pages/booking";
import About from "./pages/about";
import Contact from "./pages/contact"; // ✅ import Contact
import PackageDetails from "./pages/PackageDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/packages/:id" element={<PackageDetails />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
