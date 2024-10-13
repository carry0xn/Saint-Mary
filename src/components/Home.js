import React from 'react'
import imagen from '../img/img3.jpeg'
import Courses from './Courses'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <div className="nueva_seccion">
        <h2 className="title">Bienvenidos a Santa Maria: Escuela de Inglés</h2>
        <p>¡Aprende inglés con nosotros!</p>
        <img src={imagen} alt="English Institute" class="imgPortada"/>
      </div>
      {}
      <Courses />
      {}
      <Contact />
    </div>
  )
}

export default Home;
