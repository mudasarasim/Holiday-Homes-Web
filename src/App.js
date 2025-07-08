import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import PropertyModal from "./components/PropertyModal";
import ManageProperties from "./pages/ManageProperties";
import Services from "./pages/OurServices";
import ProprtyDetail from "./pages/PropertyDetail";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PropertyModal />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/properties" element={<Properties />} />
           <Route path="/our-services" element={<Services />} />
           <Route path="/property-management" element={<ManageProperties />} />
           <Route path="/property-detail" element={<ProprtyDetail />} />
           
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
