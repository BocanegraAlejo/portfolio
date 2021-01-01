import React, { useState } from 'react';
import '../css/Contacto.css';
import Spinner from './Spinner';
import emailjs from 'emailjs-com';


const Contacto = () => {

    const [cargando, guardarCargando] = useState(false);
    const [mostrarBtn, guardarBtn] = useState(true);

    const enviarMail = e => {
        e.preventDefault();
        guardarBtn(false);
        guardarCargando(true);
        emailjs.sendForm('default_service', 'template_4hua20c', e.target, 'user_ACM9ayhop4MUzmK5o5zNm')
        .then((result) => {
            guardarCargando(false);
            guardarBtn(true);
            alert('Su mensaje ha sido enviado. En breve recibirá una respuesta por email');
            //console.log(result.text);
            e.target.reset();
        }, (error) => {
            guardarCargando(false);
            guardarBtn(true);
            alert('Ha ocurrido un error al enviar el mensaje');
            //console.log(error.text);
        });
    }
    
    return ( 
        <section id="contacto">
            <div className="container">
                <h3 className="section--title">Contacto</h3>
                <div className="row">
                    <div className="col-md-12">
                        <form id="contact_form"  className="form-contacto" onSubmit={enviarMail}>
                            <div className="mb-3">
                                <label className="form-label">Nombre:</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="email" className="form-control" name="email" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Mensaje:</label>
                                <textarea className="form-control" name="mensaje" required />
                            </div>
                            {mostrarBtn ?  <button className="btn" type="submit">Enviar</button> : null }
                            {cargando ? <Spinner /> : null }
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contacto;