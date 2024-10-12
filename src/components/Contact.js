import React from 'react'
import Formulario from './Formulario'
import Map from './Map'

function Contact() {
  return (
    <section class="nueva_seccion">
      <div >
      <h2>Contáctanos</h2>
          
          {/* Formulario de contacto */}
          <Formulario />
          {/* Formulario de Map */}
          <Map />
      </div>
    </section>
  )
}

export default Contact
