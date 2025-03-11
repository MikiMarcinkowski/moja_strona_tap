
import css from "./Footer.module.css"; // Zaktualizowana ścieżka
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import UnderConstruction from "../underConstruction/UnderConstruction";
import Copyright from "../CopyrRight/CopyRight";



const Footer = () => {
  return (
    <footer>
      <div className={css.footer}>
        <div className="address">
          <p className={css.footerLogo}>Tapicer Jędrzejów</p>
          <p>ul. Strażacka 39</p>
          <p>28-300 Jędrzejów</p>
          <p>tel. 504311731</p>
          <p>www.tapicerjedrzejow.pl</p>
        </div>
        <div className="css.socialLinks__wrapper">
          <h2 className={css.socialLinks__title}>Odszukaj nas:</h2>
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
      {/* <div>
        <UnderConstruction />
       <Copyright/>
      </div> */}
    </footer>
  );
};

export default Footer;
