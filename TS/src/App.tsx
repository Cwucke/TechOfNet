import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default App
