import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    mensaje: '',
  })

  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send('service_lrblhla', 'template_p5buyb9', formData, 'DtRM4AG326nzTI_g5').then((response) => {
        setMensaje('¡Mensaje enviado con éxito!');
      }, (error) => {
        setMensaje('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
      })
  }

  return (
    <div className="container mt-4" style={{padding: '30px'}}>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad:</label>
          <select
            id="edad"
            name="edad"
            className="form-select"
            value={formData.edad}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona tu edad</option>
            <option value="3-11">Niños (3 a 11 años)</option>
            <option value="11-13">Pre-Adolescentes (11 a 13 años)</option>
            <option value="13-18">Adolescentes (13 a 18 años)</option>
            <option value="18+">Adultos (18 años en adelante)</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="form-control"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
      {mensaje && (
        <p className="text-center mt-3 alert alert-info">{mensaje}</p>
      )}
    </div>
  )
}

export default Formulario

