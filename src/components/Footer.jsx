import React from 'react';
import '../css/Footer.css';
import iconFace from '../img/icons/face.svg';
import iconGit from '../img/icons/github.svg';
import iconInsta from '../img/icons/insta.svg';
import iconLinke from '../img/icons/linkedin.svg';
import logo from '../img/logo1.png';
const Footer = () => {
    return (
        
        <footer>
            <div className="footer-container container">
                <img src={logo} alt="Logo" />
                <p className="copy">&copy; Alejo Bocanegra. Todos los derechos reservados.</p>

                <ul className="foot-redes">
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/AleEzequiel09"><img className="icon" src={iconFace} alt="Facebook" /></a></li>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/ale.ezequiell"><img className="icon" src={iconInsta} alt="Instagram" /></a></li>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alejo-bocanegra"><img className="icon" src={iconLinke} alt="Linkedin" /></a></li>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://github.com/BocanegraAlejo"><img className="icon" src={iconGit} alt="Github" /></a></li>
                </ul>
            </div>
        </footer>

     );
}
 
export default Footer;