import React from 'react';
import '../css/Skills.css';
import Skill from './Skill';
import iconHTML from '../img/icons/html.svg';
import iconCSS from '../img/icons/css.svg';
import iconREACT from '../img/icons/react.svg';
import iconPHP from '../img/icons/php.svg';
import iconMYSQL from '../img/icons/mysql.svg';
import iconNODEJS from '../img/icons/nodejs.svg';
import iconBOOTSTRAP from '../img/icons/bootstrap.svg';

const Skills = () => {
    return ( 
        <section id="skills">
            <div className="container">
                    <h3 className="section--title">Habilidades</h3>
                    <div className="fila--habilidad row">
                            <div className="col-md-1"></div>
                            <Skill
                                titulo="HTML 5"
                                image={iconHTML}
                            />
                            <Skill
                                titulo="CSS 3" 
                                image={iconCSS}
                            />
                            <Skill
                                titulo="JAVASCRIPT"
                                image={iconHTML}
                            /> 
                            <Skill
                                    titulo="REACT"
                                    image={iconREACT}
                            />
                            <Skill
                                titulo="BOOTSTRAP"
                                image={iconBOOTSTRAP}
                            />
                            <div className="col-md-1"></div>
                    </div>
                    <div className="fila--habilidad row">
                        <div className="col-md-3"></div>
                        <Skill
                            titulo="PHP"
                            image={iconPHP}
                        />
                        <Skill
                            titulo="NODE"
                            image={iconNODEJS}
                        />
                        <Skill
                            titulo="MYSQL"
                            image={iconMYSQL}
                        />
                        <div className="col-md-3"></div>
                    </div>       
            </div>
        </section>
     );
}
 
export default Skills;