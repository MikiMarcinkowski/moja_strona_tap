import css from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ phoneNumber }) => {
  return (
    <header className={css.header}>
      <h4 className={css.headerTitle}>
        Tapicer Jędrzejów <br />
        <span className={css.headerAddress}>ul. Strażacka 39</span>
      </h4>
      <div className={css.phoneSection}>
        <a className={css.phoneInfo} href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          <span>tel. {phoneNumber}</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
