import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
/*Js*/
import Home from './components/Home'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Biblioteca from './components/Biblioteca'
/*Font*/ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
/*Imagenes*/
import logo from './img/SAINT_MARY.png'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/home"><img src={logo} alt="English Institute Logo" className="logo" /></Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '☰' : '☰'} {}
        </button>
        <div className={`iconos_href ${isOpen ? 'open' : ''}`}>
          <ul className="nav-icons">
            <li>
              <a href="mailto:santamariaenglish2023@gmail.com" className="contact-icon" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/541155950474?text=Hola%20Quisiera%20Saber.." className="contact-icon" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/saintmary.school.of.english" className="contact-icon" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <ul className="nav-items">
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/biblioteca">Cursos</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        { }
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <footer className="footer">
      <div class="container">
            <p>Saint Mary &copy; 2024</p>
        </div>
        <ul className="footer-items">
          <li>
            <a href="mailto:santamariaenglish2023@gmail.com" className="contact-icon" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/541155950474?text=Hola%20Quisiera%20Saber.." className="contact-icon" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/saintmary.school.of.english" className="contact-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </footer>
    </Router>
  )
}

export default App
