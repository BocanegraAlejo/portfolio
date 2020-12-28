import React from 'react';
import '../css/Carouselitem.css';

const Carouselitem = ({img}) => {
    return ( 
        <div className="carousel--item">
            <img src={img} alt="Carousel"/>
        </div>
     );
}
 
export default Carouselitem;