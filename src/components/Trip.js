import React from 'react'
import CarouselComponent from './CarouselComponent'
import SAINTMARYTRIP2026 from '../doc/SAINTMARYTRIP2026.docx'
/*IMG*/
import Ramsgate from '../img/Ramsgate.webp'
import Oxford from '../img/Oxford.jpg'
import Cambridge from '../img/Cambridge.webp'
import Leeds_Castle from '../img/Leeds_Castle.webp'
import Stonehenge from '../img/Stonehenge.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function Trip() {
  return (
    <section id="viaje-2026" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-3 text-primary fw-bold mb-3">VIAJE A INGLATERRA</h1>
          <h2 className="h3 text-secondary mb-2">FEBRERO 2026</h2>
          <p className="lead text-muted"><strong>SAINT MARY: ESCUELA DE INGLÉS</strong></p>
          <div className="bg-primary text-white p-3 rounded mx-auto" style={{ maxWidth: '600px' }}>
            <h3 className="h5 mb-2">¡Experiencia Educativa Única!</h3>
            <p className="mb-0">4 semanas de inmersión total en inglés con familias británicas</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mb-5">
          <CarouselComponent />
        </div>

        {/* Main Info Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-primary text-white text-center">
                <h3 className="h5 mb-0"> Programa Académico</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"> <strong>Duración:</strong> 4 semanas completas</li>
                  <li className="mb-2"> <strong>Alojamiento:</strong> Familia británica (media pensión)</li>
                  <li className="mb-2"> <strong>Clases:</strong> 15 horas semanales</li>
                  <li> <strong>Grupos:</strong> Reducidos para atención personalizada</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-header bg-success text-white text-center">
                <h3 className="h5 mb-0"> Actividades Incluidas</h3>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="mb-2"> <strong>Excursiones:</strong> 1 día completo semanal</li>
                  <li className="mb-2"> <strong>Actividades nocturnas:</strong> Lunes a viernes</li>
                  <li className="mb-2"> <strong>Club social:</strong> Cine, karaoke, fiestas</li>
                  <li> <strong>Eventos:</strong> Fiestas internacionales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center text-primary fw-bold mb-4">Detalles del Programa</h2>

        {/* Location & Accommodation Section */}
        <div className="mb-5">
          <h3 className="text-center text-secondary mb-5"> Destino: Ramsgate</h3>
          <div className="card shadow-lg border-0">
            <div className="row g-0">
              <div className="col-lg-6">
                <img 
                  src={Ramsgate} 
                  className="w-100 h-100" 
                  alt="Ramsgate - Puerto y playas" 
                  style={{ minHeight: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-lg-6">
                <div className="card-body p-5">
                  <h4 className="text-primary mb-4">Una Ciudad Costera Excepcional</h4>
                  <div className="mb-4">
                    <h6 className="text-secondary mb-2"> Ubicación Privilegiada</h6>
                    <p className="mb-3">Pintoresca ciudad costera famosa por su puerto real y hermosas playas de arena. Un ambiente seguro y acogedor perfecto para el aprendizaje.</p>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-secondary mb-2"> Conexiones Perfectas</h6>
                    <p className="mb-3">Acceso directo y fácil a Canterbury, Londres y otras ciudades importantes. Transporte público eficiente y seguro.</p>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-secondary mb-2"> Familias Seleccionadas</h6>
                    <p className="mb-3">Familias británicas cuidadosamente elegidas y experimentadas en recibir estudiantes internacionales.</p>
                  </div>
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <h6 className="text-primary mb-2"> Inmersión Total</h6>
                    <p className="mb-0 small">Práctica constante del idioma en un ambiente familiar, seguro y auténticamente británico las 24 horas del día.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Excursions Section */}
        <div className="mb-5">
          <h3 className="text-center text-secondary mb-5"> Excursiones Incluidas</h3>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow-lg border-0 h-100">
                <img 
                  src={Oxford} 
                  className="w-100" 
                  alt="Oxford - Ciudad Universitaria" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-3">Oxford - Ciudad Universitaria</h5>
                  <p className="card-text mb-3">Tour completo por la Universidad de Oxford, incluyendo el famoso Christ Church College (inspiración de Harry Potter) y la histórica Biblioteca Bodleian.</p>
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <small className="text-primary fw-bold"> Incluye: Guía especializado + Entrada a colegios + Tiempo libre</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card shadow-lg border-0 h-100">
                <img 
                  src={Cambridge} 
                  className="w-100" 
                  alt="Cambridge - Tradición Académica" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-3">Cambridge - Tradición Académica</h5>
                  <p className="card-text mb-3">Visita a la prestigiosa Universidad de Cambridge y sus colegios históricos. Paseo por el río Cam y exploración del centro histórico.</p>
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <small className="text-primary fw-bold"> Incluye: Tour por colegios + Paseo opcional en bote + Centro histórico</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card shadow-lg border-0 h-100">
                <img 
                  src={Stonehenge} 
                  className="w-100" 
                  alt="Stonehenge - Misterio Ancestral" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-3">Stonehenge - Misterio Ancestral</h5>
                  <p className="card-text mb-3">Una de las grandes maravillas prehistóricas de Inglaterra. Centro de visitantes con audioguías y exhibiciones interactivas.</p>
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <small className="text-primary fw-bold"> Incluye: Entrada + Audioguía + Centro de visitantes + Transporte</small>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card shadow-lg border-0 h-100">
                <img 
                  src={Leeds_Castle} 
                  className="w-100" 
                  alt="Leeds Castle - Romance Medieval" 
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-primary mb-3">Leeds Castle - Romance Medieval</h5>
                  <p className="card-text mb-3">Considerado uno de los castillos más románticos de Inglaterra. Ubicado en una isla con jardines espectaculares y rica historia real.</p>
                  <div className="bg-primary bg-opacity-10 p-3 rounded">
                    <small className="text-primary fw-bold"> Incluye: Entrada al castillo + Jardines + Historia guiada</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="mb-5">
          <div className="bg-primary text-white p-5 rounded shadow-lg">
            <h3 className="text-center mb-4">Opciones Adicionales</h3>
            <div className="row text-center g-4">
              <div className="col-md-4">
                <div className="bg-white bg-opacity-10 p-4 rounded">
                  <div className="fs-1 mb-3">🗼</div>
                  <h5 className="mb-3">París + Escocia</h5>
                  <p className="mb-0">Extensión completa del viaje con dos destinos adicionales increíbles</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white bg-opacity-10 p-4 rounded">
                  <div className="fs-1 mb-3">🥐</div>
                  <h5 className="mb-3">Solo París</h5>
                  <p className="mb-0">Experiencia francesa adicional con la ciudad de la luz</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white bg-opacity-10 p-4 rounded">
                  <div className="fs-1 mb-3">🏛️</div>
                  <h5 className="mb-3">Londres</h5>
                  <p className="mb-0">2 días adicionales explorando la capital británica</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-light p-4 rounded">
          <h3 className="text-primary mb-3">Próximos Pasos</h3>
          <p className="mb-3"><strong>Reuniones informativas:</strong> Se realizarán reuniones para resolver dudas y coordinar todos los detalles</p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <button className="btn btn-primary btn-lg text-decoration-none">
            <a 
              className="btn btn-primary btn-lg text-decoration-none"
              href="https://wa.me/541155950474">
              <FontAwesomeIcon icon={faWhatsapp}/> Contactate con nosotros
            </a>
          </button>
          <button className="btn btn-primary btn-lg text-decoration-none">
            <a 
              href={SAINTMARYTRIP2026}
              download="SAINT-MARY-VIAJE-INGLATERRA-2026.docx"
              className="btn btn-primary btn-lg text-decoration-none">
              Descargar brochure completo
            </a>
          </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trip