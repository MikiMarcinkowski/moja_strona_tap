import React from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = ({ isMenuOpen }) => {
  return (
    <nav className={`${css.nav} ${isMenuOpen ? css.navOpen : ""}`}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
        </li>
        <li className={css.navItem}>
          <Link to="/galeria" className={css.navLink}>
            Galeria
          </Link>
        </li>
        <li className={css.navItem}>
          <Link to="/kontakt" className={css.navLink}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
