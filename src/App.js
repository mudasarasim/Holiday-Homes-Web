import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/properties" element={<Properties />} />
           
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
