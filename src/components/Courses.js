import React from 'react'
import pre_adolescente from '../img/preadolescentes.jpg'
import ninios from '../img/niños.jpg'
import adolescentes from '../img/adolescentes.jpg'
import adultos from '../img/adultos.webp'
import { Link } from 'react-router-dom'

function Courses() {
    const handleScroll = (id) => {
        // Navega a la ruta y luego desplaza a la sección específica
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 0) // Usa un timeout para asegurar que el cambio de ruta se complete antes de desplazarte
    }
    
  return (
    <section className="nueva_seccion">
        <h2 className="title">Nuestros cursos</h2>
        <div className="container">
            <Link to="/Biblioteca"onClick={() => handleScroll('ninios')}>
                <div className="box">
                    <img src={ninios} alt="" />
                    <h3>Niños</h3>
                    <span>Niños de 3 a 11 años</span>
                </div>
            </Link>

            <Link to="/Biblioteca" onClick={() => handleScroll('preadolescentes')}>
                <div className="box">
                    <img src={pre_adolescente} alt=""/> 
                    <h3>Pre-Adolescentes</h3>
                    <span>Pre-Adolescentes de 11 a 13 años</span>
                </div>
            </Link>
            <Link to="/Biblioteca" onClick={() => handleScroll('adolescentes')}>
                <div className="box">
                    <img src={adolescentes} alt=""/> 
                    <h3>Adolescentes</h3>
                    <span>Adolescentes de 13 a 18 años</span>
                </div>
            </Link>
            <Link to="/Biblioteca" onClick={() => handleScroll('adultos')}>
                <div className="box">
                    <img src={adultos} alt=""/> 
                    <h3>Adultos</h3>
                    <span>Adultos de 18 años en adelante</span>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Courses
