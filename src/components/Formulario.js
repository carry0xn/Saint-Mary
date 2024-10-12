import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Formulario() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    edad: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Enviar formulario con EmailJS, id correo, id plantilla y id private
    emailjs.send('service_lrblhla', 'template_p5buyb9', formData, 'DtRM4AG326nzTI_g5')
      .then((response) => {
        console.log('Correo enviado correctamente:', response.status, response.text)
        alert('Gracias por contactarnos! El correo ha sido enviado.')
      }, (error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un problema al enviar el correo, por favor intenta nuevamente.')
      })

    // Limpiar el formulario después de enviarlo
    setFormData({ name: '', email: '', message: '' , edad: ''})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="edad">Edad: </label>
          <select
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una opción</option> {/* Opción vacía al inicio */}
            <option value="menor de 5">Menor de 5</option>
            <option value="6 a 12">De 6 a 12</option>
            <option value="12 a 18">De 12 a 18</option>
            <option value="mayor de 18">Mayor de 18</option>
          </select>
        </div>

        <div>
          <label htmlFor="email">Correo: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Mensaje: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Formulario