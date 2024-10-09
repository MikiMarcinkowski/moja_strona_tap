// components/CookiesPolicy.jsx
// import React from "react";
import css from "./Cookies.module.css";

const Cookies = () => {
  return (
    <div className={css.cookie__container}>
      <h1 className={css.cookie__title}>Polityka Cookies</h1>
      <p className={css.cookie__intro}>
        Ta strona używa plików cookies w celu poprawy doświadczenia użytkownika.
        Korzystając z naszej strony, zgadzasz się na używanie plików cookies
        zgodnie z poniższą polityką.
      </p>
      <h2 className={css.cookie__subtitle}>Czym są pliki cookies?</h2>
      <p className={css.cookie__paragraph}>
        Cookies to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu
        przez przeglądarkę podczas przeglądania stron internetowych. Są używane
        w różnych celach, takich jak zapamiętywanie preferencji użytkownika,
        śledzenie ruchu na stronie, a także w celach reklamowych.
      </p>
      <h2 className={css.cookie__subtitle}>
        Rodzaje plików cookies, które stosujemy
      </h2>
      <ul className={css.cookie__list}>
        <li className={css.cookie__item}>Niezbędne pliki cookies</li>
        <li className={css.cookie__item}>Analityczne pliki cookies</li>
        <li className={css.cookie__item}>Funkcjonalne pliki cookies</li>
        <li className={css.cookie__item}>Reklamowe pliki cookies</li>
      </ul>
      <h2 className={css.cookie__subtitle}>Zarządzanie plikami cookies</h2>
      <p className={css.cookie__paragraph}>
        Możesz zarządzać plikami cookies bezpośrednio w ustawieniach swojej
        przeglądarki. Możesz blokować lub usuwać pliki cookies, jednak może to
        wpłynąć na funkcjonalność naszej strony.
      </p>
      <h2 className={css.cookie__subtitle}>Zmiany w polityce cookies</h2>
      <p className={css.cookie__paragraph}>
        Zastrzegamy sobie prawo do wprowadzania zmian w tej polityce. Wszelkie
        zmiany będą publikowane na tej stronie.
      </p>
      <footer className={css.cookie__footer}>
        &copy; {new Date().getFullYear()} Twoja Firma. Wszelkie prawa
        zastrzeżone.
      </footer>
    </div>
  );
};

export default Cookies;
