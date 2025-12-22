import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mbdslogo from './images/image.png'
import './App.css'

function header() {
  return (
    <div>
      <img src={mbdslogo} className="logo" alt="Vite logo" />
            <h1>Introduction à React</h1>
      <h2>
        A la découverte des premières notions de React
      </h2>
    </div>
  );
}

function Content() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>
        Ici, nous afficherons des informations interessantes :) 
      </p>
    </>
  )
}

function footer() {
  return (
    <footer>
      <p>Tous droits réservés - Abdelghafour ELMOBARAKY</p>
    </footer>
  );
}

function App() {
  return (
    <>
      {header()}
      {Content()}
      {footer()}
    </>
  )
}

export default App
