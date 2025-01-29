import React from 'react'
import CarouselComponent  from './CarouselComponent'

function Trip() {
  return (
    <section id="viaje-2026" className="container py-5 my-5 text-center" style={{ backgroundColor: '#FFFFFF' }}>
      <h2 className="display-4 text-primary">VIAJE A INGLATERRA FEBRERO 2026</h2>
      <p className="lead"><strong>SAINT MARY: ESCUELA DE INGLÉS</strong></p>
      <CarouselComponent  />
      <h2 className="text-center text-primary fw-bold"style={{ margin: '50px' }}>Detalles Importantes</h2>
      <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: '700px' }}>
        <li className="list-group-item"><strong>📅 Duración:</strong> 4 semanas de alojamiento en familia (media pensión)</li>
        <li className="list-group-item"><strong>📚 Clases:</strong> 15 horas de clase por semana</li>
        <li className="list-group-item"><strong>🗺️ Excursiones:</strong> Un día completo a la semana (Oxford, Cambridge, Bath, Stonehenge), medio día (Leeds Castle)</li>
        <li className="list-group-item"><strong>🎉 Actividades:</strong> Actividades sociales nocturnas (lunes a viernes), incluido un club social con cine, fiestas internacionales, karaoke y más.</li>
      </ul>
      
      <p className="text-center mt-4"><strong>✨ Oportunidades adicionales:</strong> Se puede añadir París y Escocia, o solo París, o incluso dos días en Londres.</p>

      <div className="container text-center" style={{ maxWidth: '700px' }}>
        <h3 className="mt-5 text-secondary">🏡 Alojamientos y Actividades</h3>
        <p><strong>🌊 Ramsgate:</strong> Una pintoresca ciudad costera famosa por su puerto real y playas de arena. Ofrece fácil acceso a Canterbury y Londres.</p>
        <p><strong>🤝 Actividades Sociales:</strong> Organizadas para ayudar a los estudiantes a practicar su inglés y conocer la cultura local, con excursiones a diversas ciudades y eventos como noches de cine, fiestas internacionales y más.</p>
        <p><strong>🏠 Alojamientos:</strong> Opción de vivir con una familia británica o alojamiento privado.</p>
      </div>

      <h3 className="mt-5 text-secondary text-center">✈️ Excursiones Destacadas</h3>
      <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: '700px' }}>
        <li className="list-group-item"><strong>🎓 Oxford:</strong> Tour por la Universidad de Oxford, incluyendo Christ Church College y la Biblioteca Bodleian.</li>
        <li className="list-group-item"><strong>📖 Cambridge:</strong> Visita a la Universidad de Cambridge y sus colegios históricos.</li>
        <li className="list-group-item"><strong>🪨 Stonehenge:</strong> Una de las grandes maravillas de Inglaterra.</li>
        <li className="list-group-item"><strong>🏰 Leeds Castle:</strong> Considerado uno de los castillos más románticos de Inglaterra.</li>
      </ul>

      <p className="text-center mt-4"><strong>📅 Reuniones Previas:</strong> Se realizarán reuniones para aclarar dudas y coordinar detalles. Hay tiempo suficiente para ahorrar y decidir.</p>
    </section>

  )
}

export default Trip
