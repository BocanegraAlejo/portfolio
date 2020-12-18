import React from 'react';
import '../css/Header.css';
import NavBar from './NavBar';

const Header = () => {
    return (
        <header>
           <div className="container">
               <NavBar />
               <div className="contenido__header">
                  <div className="row">
                     <div className="col-md-6">
                        <h3 className="mi-nombre">ALEJO BOCANEGRA</h3>
                        <h1 className="contenido__header--title">FULL-STACK Developer</h1>
                        <a className="btn-contactame" href="!#" >Contactame</a>
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