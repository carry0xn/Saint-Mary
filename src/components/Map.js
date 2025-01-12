import React from 'react'

function Map() {
  return (
    <section className="py-5 bg-light" style={{padding: '30px'}}>
      <div className="container text-center">
        <h2 className="display-5 mb-4 text-primary">Nuestro Instituto</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="ratio ratio-4x3 shadow rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.13609384352!2d-58.64890752527552!3d-34.60071997295542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbeccd6e8c037%3A0x52bb6edc5355f620!2sAlejandro%20Malaspina%201560%2C%20B1686%20Hurlingham%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1728764636047!5m2!1ses-419!2sar"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de nuestra ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Map
