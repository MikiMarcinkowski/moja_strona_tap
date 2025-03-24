import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CookiesModal from "./Components/modal/CookiesModal";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import Gallery from "./pages/Gallery/Gallery"; // Import nowego komponentu Gallery
import Contact from "./pages/Contact/Contact"; // Import nowego komponentu Contact
import Navigation from "./Components/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
  const phoneNumber = "+48 504 311 731";
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cookieDecision = localStorage.getItem("cookiesAccepted");
    if (!cookieDecision) {
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowModal(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowModal(false);
  };

  return (
    <Router>
      {showModal && (
        <CookiesModal onAccept={handleAccept} onReject={handleReject} />
      )}
      <Header phoneNumber={phoneNumber} />
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer phoneNumber={phoneNumber} />
    </Router>
  );
}

export default App;
