// components/CookiesModal.jsx

import css from "./CookiesModal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

const CookiesModal = ({ onAccept, onReject }) => {
  return (
    <div className={css.modal__container}>
      <div className={css.modal__content}>
        <h2 className={css.modal__text}><FontAwesomeIcon icon={faCookieBite} className={css.icon} />Używamy ciasteczek!</h2>
        <p className={css.modal__text}>
          
          Używamy ciasteczek! Cześć, ta strona używa wymaganych ciasteczek aby
          zapewnić poprawne działanie i ciasteczka trackingowe aby lepiej
          zrozumieć co Cie interesuje. To drugie będzie dopiero po
          zaakceptowaniu.{" "}
          <a href="#polityka-cookies" className={css.link}>
            Polityką Cookies
          </a>
          .
        </p>
        <div className={css.modal__buttons}>
          <button className={css.button} onClick={onAccept}>
            Akceptuj
          </button>
          <button className={css.button} onClick={onReject}>
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesModal;
