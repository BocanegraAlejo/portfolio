import React, { useState } from 'react';
import '../css/NavBar.css';
import { Link, animateScroll as scroll } from "react-scroll";
import iconFace from '../img/icons/face.svg';
import iconGit from '../img/icons/github.svg';
import iconInsta from '../img/icons/insta.svg';
import iconLinke from '../img/icons/linkedin.svg';
import iconMenuMovil from '../img/icons/menu.svg';
import logoAB from '../img/logo1.png';
const NavBar = () => {

    const [show, changeShow] = useState(false);


    return (
       
        <nav className="fixed-top">
            <div className="container nav">
                <Link 
                    to="header" 
                    smooth={true}
                    offset={-70}
                    duration={500} 
                >
                    <img src={logoAB} alt="logo"/>
                </Link>
                <ul className={show ? 'navbar-custom show' : 'navbar-custom'}>
                    <li className="opc-menu" >
                        <Link 
                            to="sobremi"
                            activeClass="activo" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} 
                            onClick={() =>changeShow(!show)}
                        >
                            Sobre Mi
                        </Link>
                    </li>
                    <li className="opc-menu">
                        <Link 
                            to="servicios"
                            activeClass="activo" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} 
                            onClick={() =>changeShow(!show)}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li className="opc-menu">
                        <Link 
                            to="skills"
                            activeClass="activo"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} 
                            onClick={() =>changeShow(!show)}
                        >
                            Habilidades
                        </Link>
                    </li>
                    <li className="opc-menu">
                        <Link 
                            to="portfolio"
                            activeClass="activo"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} 
                            onClick={() =>changeShow(!show)}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="opc-menu">
                        <Link 
                            to="contacto"
                            activeClass="activo"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} 
                            onClick={() =>changeShow(!show)}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
                <ul className={show ? "navbar-custom redes-sociales show" : 'navbar-custom redes-sociales'}>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://facebook.alejobocanegra.com/"><img className="icon" src={iconFace} alt="Facebook" /></a></li>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://instagram.alejobocanegra.com/"><img className="icon" src={iconInsta} alt="Instagram" /></a></li>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://linkedin.alejobocanegra.com/"><img className="icon" src={iconLinke} alt="Linkedin" /></a></li>
                    <li className="opc-menu"><a target="_blank" rel="noreferrer" href="https://github.alejobocanegra.com/"><img className="icon" src={iconGit} alt="Github" /></a></li>
                </ul>
                <span className="btn_menu" onClick={() => changeShow(!show)}>
                        <img src={iconMenuMovil} alt="menu" />
                </span>
            </div>
        </nav>
       
     );
}
 
export default NavBar;