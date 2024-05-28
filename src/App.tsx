// CSS
import './App.css'
// REACT ROUTER DOM
import { Routes, Route, useLocation } from 'react-router-dom'
// COMPONENTS
import Navbar from './components/Navbar'
// PAGES
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
// CONTEXT
import { ThemeProvider } from './context/ThemeContext'
// FRAMER MOTION
import { AnimatePresence } from 'framer-motion'
import Equipe from './pages/Equipe/Equipe'

function App() {
  const location = useLocation()
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <div className="container" id="container">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
