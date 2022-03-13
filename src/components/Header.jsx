import React from 'react';
import '../css/Header.css';
import NavBar from './NavBar';
import { Link, animateScroll as scroll } from "react-scroll";
import Typed from 'react-typed';
const Header = () => {
    return (
        <header id="header">
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
                        <Link className="btn-contactame" to="contacto" smooth={true}
                    offset={-70}
                    duration={500} >Contactame</Link>
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