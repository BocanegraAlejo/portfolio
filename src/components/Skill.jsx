import React from 'react';
import '../css/Skill.css';

const Skill = ({titulo, image}) => {
    return (
            <div className="col-md-2">
                <img style={{width: '60px'}} src={image} alt="Logo Skill" />
                <p className="skill-title">{titulo}</p>
            </div>
    );
}
 
export default Skill;