import React from 'react'
import imagen from '../img/img3.jpg'
import Contact from './Contact'
import Courses from './Courses'

function Home() {
  return (
    <div>
      <div class='nueva_seccion'>
        <h2 class='title'>Bienvenidos a Santa Maria: Escuela de Inglés</h2>
        <p>¡Aprende inglés con nosotros!</p>
            <img src={imagen} alt="English Institute"/>
        
      {}
      <Courses />
      {}
      <Contact />
      </div>
    </div>
  )
}

export default Home
