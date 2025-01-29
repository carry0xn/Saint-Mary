import React from 'react'
import pre_adolescente from '../img/preadolescentes.jpg'
import ninios from '../img/niños.jpeg'
import adolescentes from '../img/adolescentes.jpg'
import adultos from '../img/adultos.webp'
import cambridge from '../img/cambridge.jpg'
import trip from '../img/trip.jpeg'
import virtual from '../img/curso-virtual.png'
import speaking from '../img/speaking.webp'
import { Link } from 'react-router-dom'

function Courses() {
  const handleScroll = (id) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 0)
  }

  return (
    <section className=" bg-light text-center" style={{padding: '30px', backgroundColor: '#FFFFFF'}}>
    <div className="container">
      <h2 className="mb-4 display-5" style={{ color: '#003478' }}>Nuestros cursos</h2>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <Link to="/Biblioteca" onClick={() => handleScroll('ninios')} className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <img src={ninios} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Niños</h5>
                <p className="card-text">Niños de 3 a 11 años</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6">
          <Link to="/Biblioteca" onClick={() => handleScroll('preadolescentes')} className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <img src={pre_adolescente} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Pre-Adolescentes</h5>
                <p className="card-text">Pre-Adolescentes de 11 a 13 años</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6">
          <Link to="/Biblioteca" onClick={() => handleScroll('adolescentes')} className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <img src={adolescentes} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Adolescentes</h5>
                <p className="card-text">Adolescentes de 13 a 18 años</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6">
          <Link to="/Biblioteca" onClick={() => handleScroll('adultos')} className="text-decoration-none">
            <div className="card h-100 shadow-sm">
              <img src={adultos} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Adultos</h5>
                <p className="card-text">Adultos de 18 años en adelante</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6">
        <a href='https://www.cambridge.es/examenes-de-cambridge' className="text-decoration-none" target='_blank'>
          
            <div className="card h-100 shadow-sm">
              <img src={cambridge} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Examenes</h5>
                <p className="card-text">Examenes todos los Años en Cambridge</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <Link to="/Trip" onClick={() => handleScroll('viaje-2026')} className="text-decoration-none" >
            <div className="card h-100 shadow-sm">
              <img src={trip} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Viajes de Estudios</h5>
                <p className="card-text">Viaje a Inglaterra 2026</p>
              </div>
            </div>
        </Link>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={virtual} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Cursos Particulares</h5>
                <p className="card-text">Cursos de Conversaciones</p>
              </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={speaking} alt="" className="card-img-top rounded" />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#003478' }}>Cursos</h5>
                <p className="card-text">Cursos Especiales para Adultos Mayores</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Courses
