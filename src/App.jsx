import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>Budujemy dla was nową stronę. Za utrudnienia przepraszamy. </h3>
      </div>
      <h1>Tapicer Jędrzejów Zaprasza!</h1>
      <h2>ul. Strażacka 39, 28-300 Jędrzejów</h2>
      <h2>tel. 504 311 731</h2>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
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

export default App
