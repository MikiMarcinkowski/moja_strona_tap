// import { useState } from 'react'
import kierownicaImage from "./assets/photo/kierownica.webp";
import maszynaImage from "./assets/photo/masyna.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  
  
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h2>Tapicer Jędrzejów</h2>
        <div className="phone-info"><FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          <span>tel. 504 311 731</span>
        </div>
      </header>

      <div>
       
        <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy. </h3>
        <img src={maszynaImage} className="maszyna" alt="maszyna do szycia" />
      </div>
      <h1>
        <span className="companyName">Tapicer Jędrzejów</span> Zaprasza!
      </h1>
      <h2>ul. Strażacka 39, 28-300 Jędrzejów</h2>
      <h2>tel. 504 311 731</h2>
      <img src={kierownicaImage} className="kierownica" alt="Kierownica" />

      <div>
        <h2>czym się zajmujemy:</h2>
        <ul>
          <li>obszywanie foteli samochodowych</li>
          <li>regeneracja foteli po wystrzale AIRBAG</li>
          <li>podsufitki odklejone i po wystrzale</li>
          <li>obszywanie kierownic</li>
          <li>
            elementy mebli{" "}
            <b>(nie przyjmujemy całych kanap, foteli domowych i łóżek)</b>
          </li>
          <li>inne - Po więcej zadzwoń i zapytaj</li>
        </ul>
      </div>

      <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy. </h3>
      <footer>
        <h3>Znajdź nas na:</h3>
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
      </footer>
    </>
  );
}

export default App;
