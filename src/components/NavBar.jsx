import React, { useState } from 'react';
import '../css/NavBar.css';
import iconFace from '../img/icons/face.svg';
import iconGit from '../img/icons/github.svg';
import iconInsta from '../img/icons/insta.svg';
import iconLinke from '../img/icons/linkedin.svg';
import iconMenuMovil from '../img/icons/menu.svg';
import logo from '../img/logo.png'
const NavBar = () => {

    const [show, changeShow] = useState(false);


    return (
       
        <nav className="fixed-top">
            <div className="container nav">

           
            <h3>AB</h3>
            <ul className={show ? 'navbar-custom show' : 'navbar-custom'}>
                <li className="opc-menu"><a href="#sobremi">Sobre Mi</a></li>
                <li className="opc-menu"><a href="#servicios">Servicios</a></li>
                <li className="opc-menu"><a href="#skills">Habilidades</a></li>
                <li className="opc-menu"><a href="#portfolio">Portfolio</a></li>
                <li className="opc-menu"><a href="#contacto">Contacto</a></li>
            </ul>
            <ul className={show ? "navbar-custom redes-sociales show" : 'navbar-custom redes-sociales'}>
                <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/AleEzequiel09"><img className="icon" src={iconFace} alt="Facebook" /></a></li>
                <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ale.ezequiell"><img className="icon" src={iconInsta} alt="Instagram" /></a></li>
                <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alejo-bocanegra-088481180"><img className="icon" src={iconLinke} alt="Linkedin" /></a></li>
                <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://github.com/BocanegraAlejo"><img className="icon" src={iconGit} alt="Github" /></a></li>
            </ul>
            <span className="btn_menu" onClick={() => changeShow(!show)}>
                    <img src={iconMenuMovil} alt="menu" />
            </span>
            </div>
        </nav>
       
     );
}
 
export default NavBar;