import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from './pages/Counter'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element={<Home />}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/contacts" element={<Contacts/>}></Route>
        <Route path = "/counter" element={<Counter/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
