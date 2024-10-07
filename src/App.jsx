// import { useState } from 'react'
import kierownicaImage from "./assets/photo/kierownica.webp";
import maszynaImage from "./assets/photo/masyna.jpg";


import "./App.css";

function App() {
  return (
    <>
      <div>
        <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy. </h3>
        <img src={maszynaImage} className="maszyna" alt="maszyna do szycia" />
      </div>
      <h1>
        <span className='companyName'>Tapicer Jędrzejów</span> Zaprasza!
      </h1>
      <h2>ul. Strażacka 39, 28-300 Jędrzejów</h2>
      <h2>tel. 504 311 731</h2>
      <img src={kierownicaImage} className="kierownica" alt="Kierownica" />

      <div>
        <h2>czym się zajmujemy:</h2>
        <ul>
          <li>obszywanie foteli samochodowych</li>
          <li>regeneracja foteli po wystrzale AIRBAG</li>
          <li>podsufitki odklejone i po wystrzale</li>
          <li>obszywanie kierownic</li>
          <li>inne - Po więcej zadzwoń i zapytaj</li>
        </ul>
      </div>

      <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy. </h3>
    </>
  );
}

export default App;
