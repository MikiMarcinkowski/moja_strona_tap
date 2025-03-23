// import React from "react";
import css from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
// import GoogleMapsIconLink from "../../Components/GogleMapsIconLink/GoogleMapsIconLink";

import GoogleMapImg from "../../assets/photo/mapka_google.webp";

const Contact = () => {
  const phoneNumber = "504311731";
  const mapAdress = "https://www.google.com/maps/place/Strażacka+39,+28-300+Jędrzejów"

  return (
    <div className={css.contact__Contact}>
      <h1>Kontakt</h1>
      <div className={css.contact__Info}>
        <div className={css.contact__Address}>
          <h2>Adres</h2>
          <p>ul. Strażacka 39</p>
          <p>28-300 Jędrzejów</p>
        </div>
        <div className={css.contact__Phone}>
          <h2>Telefon</h2>
          <a href={`tel:${phoneNumber}`}>
            {phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3")}
          </a>
          <h2>WhatsUp</h2>
          <a
            href="https://wa.me/504311731"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
      <div className={css.socialLinks__wrapper}>
        <h2 className={css.socialLinks__title}>
          Zapraszamy na nasze Social Media
        </h2>
        <div className={css.socialLinks}>
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
        </div>
        <h2 className={css.googleMApsLinkTitle}>
          Nie wiesz jak do nas dojechać? Kliknij mapkę poniżej:
        </h2>
        <div className={css.googleMapsLinkContainer}>
       
          <div className={css.googleMapsLinkContainer}>
            <a
              href={ mapAdress}
              target="_blank"
              rel="noopener noreferrer"
              className={css.googleMapsButton}
            >
              <img
                src={GoogleMapImg}
                alt="Lokalizacja na mapie Google"
                className={css.googleMapImage}
              />
              <span className={css.googleMapsText}>
                Kliknij, aby zobaczyć na mapie
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Możesz dodać formularz kontaktowy tutaj, jeśli chcesz */}
    </div>
  );
};

export default Contact;
