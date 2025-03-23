import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CookiesModal from "./Components/modal/CookiesModal";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Offer from "./Components/Offer/Offer";
import Address from "./Components/SectionAddress/SectionAddress";
import SewingMachineImage from "./Components/BackgroundSection/BackgroundSection";
import GoogleMapsLink from "./Components/GoogleMapsLink/GoogleMapsLink";
import HomePageGallery from "./Components/HomePageGallery/HomePageGallery";
import Gallery from "./Components/Gallery/Gallery"; // Import nowego komponentu Gallery
import Contact from "./Components/Contact/Contact"; // Import nowego komponentu Contact
import Navigation from "./Components/Navigation/Navigation";



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
      <Navigation /> {/* Przenieś Navigation tutaj */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SewingMachineImage />
              <Address />
              <GoogleMapsLink
                address="ul. Strażacka 39, Jędrzejów"
                label="Otwórz w Mapach Google"
              />
              <HomePageGallery />
              <Offer />
            </>
          }
        />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer phoneNumber={phoneNumber} />
    </Router>
  );
}

export default App;
