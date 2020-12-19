import React from 'react';
import '../css/Servicios.css';
import Servicio from './Servicio';
import imgServicios from '../img/servicios.jpg';
import iconCoding from '../img/icons/coding.svg';

const Servicios = () => {
    return ( 
        <section id="servicios">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="servicios--img" src={imgServicios} alt="Servicios" />
                    </div>
                    <div className="col-md-6">
                        <h3 className="section--title">Servicios</h3>
                        <Servicio 
                            img={iconCoding}
                            titulo="Desarrollo de Sitios Web Estaticos"
                            descripcion="Diseño del sitio, y desarrollo para su correcto funcionamiento en distintos dispositivos. Utilizando las ultimas tecnologias: HTML5, CSS3, JavaScript, React JS. Segun desee el cliente."
                        />
                        <Servicio 
                            img={iconCoding}
                            titulo="Desarrollo de Sitios Web Dinamicos"
                            descripcion="Para clientes que requieren actualizar sus contenidos de la web de manera frecuente, Mediante un panel de administración desarrollado 100% por nosotros, podra modificar su contenido."
                        />
                        <Servicio 
                            img={iconCoding}
                            titulo="Rediseños, y modificaciones "
                            descripcion="¿Queres cambiar algo y/o rediseñar tu web ya realizada? Me brindas el codigo fuente y realizamos las modificaciones que deseé"
                        />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Servicios;