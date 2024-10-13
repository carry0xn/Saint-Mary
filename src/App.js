import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import Contact from './components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from './img/SAINT_MARY-removebg-preview.png' 

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo-container">
        <img src={logo} alt="English Institute Logo" className="logo" />
        </div>
        <div class="iconos_href">
        <ul className="nav-icons">
          <li>
            <a href="mailto:santamariaenglish2023@gmail.com" className="contact-icon" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/541155950474?text=Hola%20Quisiera%20Saber..%20" className="contact-icon" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
              
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/saintmary.school.of.english?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="contact-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
        <ul className="nav-items">
          
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/courses">Cursos</Link></li>
        </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {}
      <Home />
      <footer className="footer">
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
