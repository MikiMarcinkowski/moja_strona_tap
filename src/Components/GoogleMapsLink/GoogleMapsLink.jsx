import React from "react";
import css from "./GoogleMapsLink.module.css";

const GoogleMapsLink = ({ address, label }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className={css.map__link}>
      
      <a
        href={mapsUrl}
        
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    </div>
  );
};

export default GoogleMapsLink;


