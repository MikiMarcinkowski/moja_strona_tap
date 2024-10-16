
import css from "./Offer.module.css"; 

const Offer = () => {
  return (
    <div className={css.offer}>
      <h2>Czym się zajmujemy?</h2>
      <h3>Głównie tapicerstwem samochodowym i motocyklowym:</h3>
      <ul className={css.itemsList}>
        <li>Obszywanie kanap motocyklowych</li>
        <li>Obszywanie foteli samochodowych</li>
        <li>Regeneracja foteli po wystrzale AIRBAG</li>
        <li>Podsufitki odklejone i po wystrzale</li>
        <li>Obszywanie kierownic</li>
              <li>Inne - Po więcej zadzwoń i zapytaj</li>
              <li>Krzesła</li>
                      <li>
          Elementy mebli{" "}
          <b>(nie przyjmujemy całych kanap, foteli domowych i łóżek)</b>
        </li>
      </ul>
    </div>
  );
};

export default Offer;
