import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    mensaje: ''
  })

  const [mensaje, setMensaje] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.send('service_lrblhla', 'template_p5buyb9', formData, 'DtRM4AG326nzTI_g5')
      .then((response) => {
        setMensaje('¡Mensaje enviado con éxito!')
      }, (error) => {
        setMensaje('Hubo un error al enviar el mensaje. Inténtalo de nuevo.')
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Edad:</label>
          <select name="edad" value={formData.edad} onChange={handleChange} required>
            <option value="">Selecciona tu edad</option>
            <option value="3-11">Niños (3 a 11 años)</option>
            <option value="11-13">Pre-Adolescentes (11 a 13 años)</option>
            <option value="13-18">Adolescentes (13 a 18 años)</option>
            <option value="18+">Adultos (18 años en adelante)</option>
          </select>
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
        </div>
        <button type="submit">Enviar</button>
      </form>
      
      { }
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Formulario;
