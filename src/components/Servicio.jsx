import React from 'react';
import '../css/Servicio.css';


const Servicio = ({img, titulo, descripcion}) => {
    return ( 
        <div className="servicio">
            <div className="row">
                <div className="col-md-4 align-img">
                    <img src={img} alt="Servicio" />
                </div>
                <div className="col-md-8 servicio--info">
                    <h4>{titulo}</h4>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Servicio;