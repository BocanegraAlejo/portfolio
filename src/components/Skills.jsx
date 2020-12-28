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
                    <div className="row">
                        <div className="col-md-5">
                            <Skill
                                titulo="HTML 5"
                                porcentaje="100%"
                                image={iconHTML}
                            />
                            
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill
                                titulo="CSS 3" 
                                porcentaje="85%"
                                image={iconCSS}
                            />
                        </div>  
                    </div>
                  
                    <div className="row">
                        <div className="col-md-5">
                            <Skill
                                titulo="JS"
                                porcentaje="90%"
                                image={iconHTML}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill
                                titulo="REACT"
                                porcentaje="75%"
                                image={iconREACT}
                            />
                        </div>  
                    </div>
                    
                    <div className="row">
                        <div className="col-md-5">
                            <Skill
                                titulo="PHP"
                                porcentaje="100%"
                                image={iconPHP}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill
                                titulo="NODE"
                                porcentaje="60%"
                                image={iconNODEJS}
                            />
                        </div>  
                    </div>
                  
                    <div className="row">
                        <div className="col-md-5">
                            <Skill
                                titulo="MYSQL"
                                porcentaje="100%"
                                image={iconMYSQL}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill
                                titulo="BOOTSTRAP"
                                porcentaje="100%"
                                image={iconBOOTSTRAP}
                            />
                        </div>  
                    </div>         
            </div>
        </section>
     );
}
 
export default Skills;