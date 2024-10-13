import React, { useMemo } from 'react';
import prekinder from '../img/Pre_Kinder.png';
import kinder from '../img/Kinder.png';
import kids1 from '../img/Kids_1.png';
import kids2 from '../img/Kids_2.png';
import kids3 from '../img/Kids_3.png';
import kids4 from '../img/Kids_4.png';
import kids5 from '../img/Kids_5.png';
import teens1 from '../img/Teens_1.png';
import teens2 from '../img/Teens_2.png';
import teens3 from '../img/Teens_3.png';
import secondyear from '../img/Second_Year.png';
import thirdyear from '../img/Third_Year.png';
import fourthyear from '../img/Fourth_Year.png';
import fifthyear from '../img/Fifth_Year.png';
import superior from '../img/Superior.png';

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
    ], []);

    return (
        <section className='nueva_seccion'>
            <section className="levels">
                <h2 className="title">Nuestros Cursos</h2>
                <h1 id="ninios">Niños</h1>
                <div className="imagenes_levels">
                    {niveles.slice(0, 4).map(({ id, title, img }) => (
                        <div className="box-biblioteca" key={id}>
                            <div className="imgBx">
                                <img src={img} alt={`Nivel: ${title}`} />
                            </div>
                            <div className="content">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 id="preadolescentes">Pre Adolescentes</h1>
                <div className="imagenes_levels">
                    {niveles.slice(4, 7).map(({ id, title, img }) => (
                        <div className="box-biblioteca" key={id}>
                            <div className="imgBx">
                                <img src={img} alt={`Nivel: ${title}`} />
                            </div>
                            <div className="content">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 id="adolescentes">Adolescentes</h1>
                <div className="imagenes_levels">
                    {niveles.slice(7, 14).map(({ id, title, img }) => (
                        <div className="box-biblioteca" key={id}>
                            <div className="imgBx">
                                <img src={img} alt={`Nivel: ${title}`} />
                            </div>
                            <div className="content">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 id="adultos">Adultos</h1>
                <div className="imagenes_levels">
                    {niveles.slice(14).map(({ id, title, img }) => (
                        <div className="box-biblioteca" key={id}>
                            <div className="imgBx">
                                <img src={img} alt={`Nivel: ${title}`} />
                            </div>
                            <div className="content">
                                <h2>{title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Biblioteca
