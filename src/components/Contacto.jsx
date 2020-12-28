import React from 'react';
import '../css/Contacto.css';

const Contacto = () => {
    return ( 
        <section id="contacto">
            <div className="container">
                <h3 className="section--title">Contacto</h3>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-contacto">
                            <div className="mb-3">
                                <label className="form-label">Nombre:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mensaje:</label>
                                <textarea className="form-control" />
                            </div>
                            <button className="btn" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contacto;