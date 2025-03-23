// import React from "react";
import maszynaImage from "../../assets/photo/masyna.webp"; // Ścieżka do obrazu
import css from "./BackgroundSection.module.css"; // Import stylów

const SewingMachineImage = () => {
  return (
    <div className={css.build_title}>
      <img src={maszynaImage} className={css.maszyna} alt="maszyna do szycia" />
    </div>
  );
};

export default SewingMachineImage;
