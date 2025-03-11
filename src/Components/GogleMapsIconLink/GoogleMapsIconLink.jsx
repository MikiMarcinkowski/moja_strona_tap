import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import css from "./GoogleMapsIconLink.module.css";

const GoogleMapsIconLink = () => {
  const address = "Strażacka 39, 28-300 Jędrzejów";
  const encodedAddress = address.replace(/ /g, "+"); // Proste zastąpienie spacji
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleClick = () => {
    window.open(mapsUrl, "_blank", "noopener noreferrer");
  };

  return (
    <FontAwesomeIcon
      
      icon={faMapMarkerAlt}
     className={css.map__icon}
      onClick={handleClick}
    />
  );
};

export default GoogleMapsIconLink;
