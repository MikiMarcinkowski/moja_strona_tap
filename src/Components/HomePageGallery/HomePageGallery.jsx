
import kierownicaImage from "../../assets/photo/kierownica.webp";
import fotel_zastawa from "../../assets/photo/fotel_zastawa.webp";
import kanapa_moto from "../../assets/photo/kanapa_moto.webp";
import css from "./HomePageGallery.module.css"; 

const HomePageGallery = () => {
  return (
    <div className={css.gallery}>
      <img
        src={kierownicaImage}
        className={css.gallery__item}
        alt="kierownica"
      />
      <img src={fotel_zastawa} className={css.gallery__item} alt="fotel" />
      <img src={kanapa_moto} className={css.gallery__item} alt="kanapa" />
    </div>
  );
};

export default HomePageGallery;
