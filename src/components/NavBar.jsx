import React from 'react';
import '../css/NavBar.css';
import iconFace from '../img/icons/face.svg';
import iconGit from '../img/icons/github.svg';
import iconInsta from '../img/icons/insta.svg';
import iconLinke from '../img/icons/linkedin.svg';

const NavBar = () => {
    return (
        <nav>
            <h3>LOGO</h3>
            <ul className="navbar">
                <li className="opc-menu"><a href="#sobremi">Sobre Mi</a></li>
                <li className="opc-menu"><a href="#servicios">Servicios</a></li>
                <li className="opc-menu"><a href="#skills">Skills</a></li>
                <li className="opc-menu"><a href="!#">Portfolio</a></li>
                <li className="opc-menu"><a href="!#">Contacto</a></li>
            </ul>
            <ul className="navbar redes-sociales">
                <li className="opc-menu"><a href="!#"><img className="icon" src={iconFace} alt="Facebook" /></a></li>
                <li className="opc-menu"><a href="!#"><img className="icon" src={iconInsta} alt="Instagram" /></a></li>
                <li className="opc-menu"><a href="!#"><img className="icon" src={iconLinke} alt="Linkedin" /></a></li>
                <li className="opc-menu"><a href="!#"><img className="icon" src={iconGit} alt="Github" /></a></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;