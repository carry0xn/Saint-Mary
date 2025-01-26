import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
/*Js*/
import Home from './components/Home'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Biblioteca from './components/Biblioteca'
import Viaje from './components/Trip'
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
      <section className='App' style={{backgroundColor: '#003478'}} >
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <Link className="navbar-brand text-white" to="/home">
            <img src={logo} alt="English Institute Logo" style={{ height: '150px' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            style={{ color: '#000000', borderColor: '#000000' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" style={{ color: '#00247D', fontSize: '35px' }} to="/home">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: '#00247D', fontSize: '35px' }} to="/contact">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{ color: '#00247D', fontSize: '35px' }} to="/courses">Cursos</Link>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item">
                <a href="mailto:santamariaenglish2023@gmail.com" className="nav-link" style={{ color: '#00247D', fontSize: '35px', margin: '10px' }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://wa.me/541155950474" className="nav-link" style={{ color: '#00247D', fontSize: '35px', margin: '10px' }}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li className="nav-item">
                <a href="https://www.instagram.com/saintmary.school.of.english" className="nav-link" style={{ color: '#00247D', fontSize: '35px', margin: '10px' }}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/trip" element={<Viaje />} />
        { }
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

      <footer className="py-4" style={{ backgroundColor: '#CF142B', color: '#FFFFFF' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">Saint Mary &copy; 2025</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="mailto:santamariaenglish2023@gmail.com" className="text-white mx-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://wa.me/541155950474" className="text-white mx-2">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/saintmary.school.of.english" className="text-white mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      </section> 

    </Router>
  )
}

export default App
