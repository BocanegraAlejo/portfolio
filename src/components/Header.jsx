import React from 'react';
import '../css/Header.css';
import NavBar from './NavBar';
import Typed from 'react-typed';
const Header = () => {
    return (
        <header>
           <NavBar />
           <div className="container">
               <div className="contenido__header">
                  <div className="row">
                     <div className="col-md-6">
                        <h3 className="mi-nombre">ALEJO BOCANEGRA</h3>
                        <h1 className="contenido__header--title">
                        <Typed
                           strings={[
                              'Desarrollador Front-End',
                              'Desarrollador Back-End',
                              'Desarrollador Full-Stack']}
                              
                              typeSpeed={90}
                              backSpeed={50}
                              loop >
                        </Typed>
                        </h1>
                        <a className="btn-contactame" href="#contacto" >Contactame</a>
                     </div>
                     <div className="col-md-6">

                     </div>
                  </div>
                
               </div>
           </div>
             
        </header>
           
     );
}
 
export default Header;