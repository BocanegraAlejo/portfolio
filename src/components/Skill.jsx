import React from 'react';
import '../css/Skill.css';

const Skill = ({porcentaje, image}) => {
    return (
            <div className="row">
                <div className="col-md-2">
                    <img style={{width: '40px'}} src={image} alt="Logo Skill" />
                </div>
                
                <div className="col-md-10">
                    <div className="progress custom-progress">
                        <div className="progress-bar progress-bar-striped " role="progressbar" style={{width: porcentaje}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{porcentaje}</div>
                    </div>
                </div>
                
            </div>
           
       
     );
}
 
export default Skill;