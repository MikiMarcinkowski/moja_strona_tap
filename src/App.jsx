import { useEffect, useState } from "react";

import CookiesModal from "./Components/modal/CookiesModal";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Offer from "./Components/Offer/Offer";
import Gallery from "./Components/Gallery/Gallery";
import UnderConstruction from "./Components/underConstruction/UnderConstruction";
import Address from "./Components/SectionAddress/SectionAddress";
import SewingMachineImage from "./Components/BackgroundSection/BackgroundSection";


function App() {
  const phoneNumber = "504311731";
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
    <>
      {showModal && (
        <CookiesModal onAccept={handleAccept} onReject={handleReject} />
      )}

      <Header phoneNumber={phoneNumber} />
      <UnderConstruction />

      <SewingMachineImage />

      <Address />
      <Gallery />
      <Offer />
      <Footer/>
    </>
  );
}

export default App;
