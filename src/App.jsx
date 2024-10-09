import kierownicaImage from "./assets/photo/kierownica.webp";
import kanapa_moto from "./assets/photo/fotel_zastawa.webp";
import fotel_zastawa from "./assets/photo/kanapa_moto.webp";
import maszynaImage from "./assets/photo/masyna.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import  { useEffect, useState } from "react";
import CookiesModal from "./assets/modal/CookiesModal";

// import CookiesPolicy from "./assets/Cookies/Cookies";


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
  localStorage.setItem("cookiesAccepted", "true"); // Zapisanie decyzji w localStorage
  setShowModal(false); 
};

const handleReject = () => {
  localStorage.setItem("cookiesAccepted", "false"); // 
  setShowModal(false); 
};

   
  
  return (
    <>
      {showModal && (
        <CookiesModal onAccept={handleAccept} onReject={handleReject} />
      )}
 

      <header className="header">
        <h4>
          Tapicer Jędrzejów <br />
          <span className="header-address">ul. Strażacka 39</span>
        </h4>
        <div>
          <a className="phone-info" href={`tel:${phoneNumber}`}>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
            <span>tel. 504 - 311 - 731</span>
          </a>
        </div>
      </header>

      <div>
        <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy.</h3>
        <img src={maszynaImage} className="maszyna" alt="maszyna do szycia" />
      </div>

      <h1>
        <span className="companyName">Tapicer Jędrzejów</span> Zaprasza!
      </h1>

      <h2>ul. Strażacka 39, 28-300 Jędrzejów</h2>

      <div className="images">
        <img src={kierownicaImage} className="kierownica" alt="kierownica" />
        <img src={fotel_zastawa} className="kierownica" alt="kierownica" />
        <img src={kanapa_moto} className="kierownica" alt="kierownica" />
      </div>

      <div>
        <h2>Czym się zajmujemy?</h2>
        <h3>Głównie tapicerstwem samochodowym i motocyklowym:</h3>
        <ul className="items-list">
          <li>Obszywanie kanap motocyklowych</li>
          <li>Obszywanie foteli samochodowych</li>
          <li>Regeneracja foteli po wystrzale AIRBAG</li>
          <li>Podsufitki odklejone i po wystrzale</li>
          <li>Obszywanie kierownic</li>
          <li>
            Elementy mebli{" "}
            <b>(nie przyjmujemy całych kanap, foteli domowych i łóżek)</b>
          </li>
          <li>Inne - Po więcej zadzwoń i zapytaj</li>
        </ul>
      </div>

      <footer>
        <div className="footer">
          <div className="address">
            <p className="footer-logo">Tapicer Jędrzejów</p>
            <p>ul. Strażacka 39</p>
            <p>28-300 Jędrzejów</p>
            <p>tel. 504311731 </p>
            <p>www.tapicerjedrzejow.pl</p>
          </div>
          <div>
            <h2>Odszukaj nas:</h2>
            <div className="social-links">
              <a
                href="https://www.facebook.com/tapicerjedrzejow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/tapicerjedrzejow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://wa.me/504311731"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy.</h3>
          <p>Copyright by MARVI</p>
        </div>
      </footer>
    </>
  );
}

export default App;
