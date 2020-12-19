import React from 'react';
import '../css/Skills.css';
import Skill from './Skill';
import iconHTML from '../img/icons/html.svg';
import iconCSS from '../img/icons/css.svg';
const Skills = () => {
    return ( 
        <section id="skills">
            <div className="container">
                    <h3 className="section--title">Skills</h3>
                    <div className="row">
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="100%"
                                image={iconHTML}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="85%"
                                image={iconCSS}
                            />
                        </div>  
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="100%"
                                image={iconHTML}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="85%"
                                image={iconCSS}
                            />
                        </div>  
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="100%"
                                image={iconHTML}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="85%"
                                image={iconCSS}
                            />
                        </div>  
                    </div>
                    <br></br> 
                    <div className="row">
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="100%"
                                image={iconHTML}
                            /> 
                        </div>
                        <div className="col-md-2"></div>  
                        <div className="col-md-5">
                            <Skill 
                                porcentaje="85%"
                                image={iconCSS}
                            />
                        </div>  
                    </div>         
            </div>
        </section>
     );
}
 
export default Skills;