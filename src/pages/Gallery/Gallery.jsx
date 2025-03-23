import React from "react";
import css from "./Gallery.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Gallery = () => {
  return (
    <section className={css.gallerySection}>
      <h1>Galeria</h1>
      <p>
        Przepraszamy, galeria jest w trakcie rozbudowy. Zapraszamy do
        odwiedzenia naszych mediów społecznościowych, aby zobaczyć nasze
        najnowsze prace:
      </p>
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
    </section>
  );
};

export default Gallery;
