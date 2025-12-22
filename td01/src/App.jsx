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

function App() {
  return (
    <>
      {header()}
    </>
  )
}

export default App
