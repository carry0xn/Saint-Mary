import React from 'react'
import kinder from '../img/kinder.jpeg'
import pre_adolescente from '../img/preadolescentes.jpeg'
import ninios from '../img/niños.jpeg'
import adolescentes from '../img/adolescentes.jpeg'
import adultos from '../img/adultos.jpeg'
import cambridge from '../img/cambridge.jpg'
import trip from '../img/Aplicando nombre.jpg'
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

  const courseCategories = [
    {
      title: "Cursos por Edad",
      subtitle: "Programas diseñados específicamente para cada grupo etario",
      courses: [
        {
          id: 1,
          title: "Niños (3-5 años)",
          description: "Primeros pasos en inglés con juegos y actividades lúdicas",
          image: kinder,
          link: "/Biblioteca",
          scrollTo: "prekinder",
          badge: "Principiante",
          color: "#28a745"
        },
        {
          id: 2,
          title: "Niños (5-11 años)",
          description: "Desarrollo de habilidades básicas con metodología divertida",
          image: ninios,
          link: "/Biblioteca",
          scrollTo: "kids2",
          badge: "Básico",
          color: "#17a2b8"
        },
        {
          id: 3,
          title: "Pre-Adolescentes (11-13 años)",
          description: "Preparación para niveles intermedios con enfoque comunicativo",
          image: pre_adolescente,
          link: "/Biblioteca",
          scrollTo: "kids3",
          badge: "Intermedio",
          color: "#ffc107"
        },
        {
          id: 4,
          title: "Adolescentes (13-18 años)",
          description: "Inglés avanzado con preparación para exámenes internacionales",
          image: adolescentes,
          link: "/Biblioteca",
          scrollTo: "teens1",
          badge: "Pre-Intermedio",
          color: "#fd7e14"
        },
        {
          id: 5,
          title: "Adultos (18+ años)",
          description: "Cursos flexibles para profesionales y estudiantes universitarios",
          image: adultos,
          link: "/Biblioteca",
          scrollTo: "superior",
          badge: "Todos los Niveles",
          color: "#6f42c1"
        }
      ]
    },
    {
      title: "Programas Especiales",
      subtitle: "Experiencias únicas y certificaciones internacionales",
      courses: [
        {
          id: 6,
          title: "Exámenes Cambridge",
          description: "Certificaciones oficiales reconocidas mundialmente",
          image: cambridge,
          link: "https://www.cambridge.es/examenes-de-cambridge",
          external: true,
          badge: "Certificación",
          color: "#dc3545"
        },
        {
          id: 7,
          title: "Viaje a Inglaterra 2026",
          description: "Inmersión total de 4 semanas con familias británicas",
          image: trip,
          link: "/Trip",
          scrollTo: "viaje-2026",
          badge: "Inmersión",
          color: "#198754"
        }
      ]
    },
    {
      title: "Cursos Personalizados",
      subtitle: "Atención especializada según tus necesidades",
      courses: [
        {
          id: 8,
          title: "Cursos Particulares",
          description: "Clases individuales de conversación y práctica intensiva",
          image: virtual,
          badge: "Individual",
          color: "#0d6efd"
        },
        {
          id: 9,
          title: "Adultos Mayores",
          description: "Programas especiales adaptados para la tercera edad",
          image: speaking,
          badge: "Especializado",
          color: "#6610f2"
        }
      ]
    }
  ]

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Hero Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#003478' }}>
            Nuestros Cursos de Inglés
          </h1>
        </div>

        

        {/* Course Categories */}
        {courseCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <div className="text-center mb-4">
              <h2 className="h3 text-primary mb-2">{category.title}</h2>
              <p className="text-muted">{category.subtitle}</p>
            </div>
            
            <div className="row g-4">
              {category.courses.map((course) => (
                <div key={course.id} className="col-lg-4 col-md-6">
                  {course.link ? (
                    course.external ? (
                      <a href={course.link} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                        <CourseCard course={course} />
                      </a>
                    ) : (
                      <Link 
                        to={course.link} 
                        className="text-decoration-none" 
                        onClick={() => course.scrollTo && setTimeout(() => handleScroll(course.scrollTo), 300)}
                      >
                        <CourseCard course={course} />
                      </Link>
                    )
                  ) : (
                    <div className="text-decoration-none" style={{ cursor: 'pointer' }}>
                      <CourseCard course={course} />
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        ))}
        
      </div>

      {/* Level Test Section */}
        <div className="text-center mb-5">
          <div className="card border-0 shadow-lg mx-auto" style={{ maxWidth: '600px', background: 'linear-gradient(135deg, #667eea 0%, #001affff 100%)' }}>
            <div className="card-body py-4">
              <div className="mb-3">
                <i className="fas fa-question-circle fa-3x text-white mb-3"></i>
              </div>
              <h3 className="text-white mb-3">¿No sabes cuál es tu nivel?</h3>
              <p className="text-white-50 mb-4">
                Descubre tu nivel de inglés con nuestro test gratuito. Solo te tomará unos minutos.
              </p>
              <Link to="/level-test" className="btn btn-light btn-lg px-4 py-2 fw-bold" style={{ borderRadius: '25px' }}>
                <i className="fas fa-play-circle me-2"></i>
                Hacer Test de Nivel
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

// Componente para las cards de cursos
const CourseCard = ({ course }) => (
  <div className="card h-100 shadow-sm border-0 course-card">
    <div className="position-relative">
      <img src={course.image} alt={course.title} className="card-img-top" style={{ height: '300px', objectFit: 'cover' }} />
      {course.badge && (
        <span 
          className="badge position-absolute top-0 end-0 m-2 px-3 py-2"
          style={{ backgroundColor: course.color, fontSize: '0.8rem' }}
        >
          {course.badge}
        </span>
      )}
    </div>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title" style={{ color: '#003478' }}>{course.title}</h5>
      <p className="card-text text-muted flex-grow-1">{course.description}</p>
      <div className="mt-auto">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-primary">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Courses
