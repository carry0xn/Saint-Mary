import React, { useMemo } from 'react'
import prekinder from '../img/Pre_Kinder.png'
import kinder from '../img/Kinder.png'
import kids1 from '../img/Kids_1.png'
import kids2 from '../img/Kids_2.png'
import kids3 from '../img/Kids_3.png'
import kids4 from '../img/Kids_4.png'
import kids5 from '../img/Kids_5.png'
import teens1 from '../img/Teens_1.png'
import teens2 from '../img/Teens_2.png'
import teens3 from '../img/Teens_3.png'
import secondyear from '../img/Second_Year.png'
import thirdyear from '../img/Third_Year.png'
import fourthyear from '../img/Fourth_Year.png'
import fifthyear from '../img/Fifth_Year.png'
import superior from '../img/Superior.png'

const Biblioteca = () => {
    const niveles = useMemo(() => [
        { id: 'prekinder', title: 'Pre-Kinder', img: prekinder },
        { id: 'kinder', title: 'Kinder', img: kinder },
        { id: 'kids1', title: 'Kids 1', img: kids1 },
        { id: 'kids2', title: 'Kids 2', img: kids2 },
        { id: 'kids3', title: 'Kids 3', img: kids3 },
        { id: 'kids4', title: 'Kids 4', img: kids4 },
        { id: 'kids5', title: 'Kids 5', img: kids5 },
        { id: 'teens1', title: 'Teens 1', img: teens1 },
        { id: 'teens2', title: 'Teens 2', img: teens2 },
        { id: 'teens3', title: 'Teens 3', img: teens3 },
        { id: 'secondyear', title: 'Second Year', img: secondyear },
        { id: 'thirdyear', title: 'Third Year', img: thirdyear },
        { id: 'fourthyear', title: 'Fourth Year', img: fourthyear },
        { id: 'fifthyear', title: 'Fifth Year', img: fifthyear },
        { id: 'superior', title: 'Superior', img: superior },
    ], [])

    return (
        <section className="py-5">
      <div className="container">
        {[
          { title: 'Niños', niveles: niveles.slice(0, 4) },
          { title: 'Pre Adolescentes', niveles: niveles.slice(4, 7) },
          { title: 'Adolescentes', niveles: niveles.slice(7, 14) },
          { title: 'Adultos', niveles: niveles.slice(14) },
        ].map(({ title, niveles }) => (
          <div key={title} className="mb-5">
            <h3 className="text-primary text-center mb-4">{title}</h3>
            <div className="row g-4">
              {niveles.map(({ id, title, img }) => (
                <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="card shadow-sm">
                    <img
                      src={img}
                      className="card-img-top img-fluid rounded"
                      alt={`Nivel: ${title}`}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Biblioteca
