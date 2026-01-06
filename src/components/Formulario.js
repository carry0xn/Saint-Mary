import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    edad: '',
    message: '',
  })

  const [mensaje, setMensaje] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMensaje('')

    // Preparar los datos para el template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      edad: formData.edad,
      message: formData.message,
    }

    console.log('Enviando datos:', templateParams)

    // Inicializar EmailJS con la Public Key
    emailjs.init('tn67V_yJBnwvsa-qT')
    
    // Verificar que EmailJS esté inicializado
    emailjs.send('service_je2jrv4', 'template_lzyonhv', templateParams)
      .then((response) => {
        console.log('Correo enviado correctamente:', response.status, response.text)
        setMensaje('¡Mensaje enviado con éxito!')
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          edad: '',
          message: '',
        })
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error)
        setMensaje('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
        setIsLoading(false)
      })
  }

  return (
    <div className="container mt-4" style={{padding: '30px'}}>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
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
          <label htmlFor="message" className="form-label">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
      {mensaje && (
        <p className={`text-center mt-3 alert ${mensaje.includes('éxito') ? 'alert-success' : 'alert-danger'}`}>
          {mensaje}
        </p>
      )}
    </div>
  )
}

export default Formulario

