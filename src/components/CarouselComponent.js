import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap si aún no lo hiciste
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react'
import collague from '../img/collague.jpg'
import colisseum from '../img/colisseum.jpeg'
import zebra_cross from '../img/zebra_cross.jpeg'
import tower from '../img/tower.jpeg'
import telefone from '../img/telefone.jpeg'
import trip_logo from '../img/trip_logo.jpeg'
import flag from '../img/flag.jpeg'
import sir from '../img/sir.jpeg'
import castle2 from '../img/castle (2).jpeg'
import painting from '../img/painting.jpeg'
import flower from '../img/flower.jpeg'
import garden from '../img/garden.jpeg'


function CarouselComponent  () {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        {/* Contenido del carrusel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={collague} className="d-block w-100" alt="First slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={colisseum} className="d-block w-100" alt="Second slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={zebra_cross} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={tower} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={telefone} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={trip_logo} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={flag} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={sir} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={castle2} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={painting} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={flower} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
          <div className="carousel-item">
            <img src={garden} className="d-block w-100" alt="Third slide" style={{ width: "100px", height: "700px", objectFit: "cover" }}/>
          </div>
        </div>
  
        {/* Controles del carrusel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default CarouselComponent 