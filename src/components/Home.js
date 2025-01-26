import React from 'react'
import Courses from './Courses'
import Contact from './Contact'
import imagen from '../img/logo.jpg'

function Home() {
  return (
    <div>
      {/* Sección principal */}
      <div className="container text-center my-5" style={{ padding: '50px', borderRadius: '30px', backgroundColor: '#FFFFFF'}}>
        <h2 className="display-4">Bienvenidos a Saint Mary: Escuela de Inglés</h2>
        <p className="lead">¡Aprende inglés con nosotros!</p>
        <img src={imagen} alt="English Institute" className="img-fluid rounded" />
      </div>
      
      {/* Otros componentes */}
      <Courses />
      <Contact />
    </div>
  )
}

export default Home
