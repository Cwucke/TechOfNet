import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Message from './pages/Message'
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
        <Route path = "/message" element={<Message></Message>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
