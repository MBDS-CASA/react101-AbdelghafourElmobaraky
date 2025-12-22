import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'
import Menu from './components/Menu.jsx' 

function App() {
  return (
    <>
      <Menu/>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App

