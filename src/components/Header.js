import React, { useState } from 'react'
/*Imagenes*/
import logo from '../img/SAINT_MARY.png'
import { Link } from 'react-router-dom'
/*Font*/ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className="bg-light">
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
                            <Link className="nav-link" style={{ color: '#00247D', fontSize: '25px' }} to="/home">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#00247D', fontSize: '25px' }} to="/contact">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#00247D', fontSize: '25px' }} to="/courses">Cursos</Link>
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
    </section>
  )
}


export default Header