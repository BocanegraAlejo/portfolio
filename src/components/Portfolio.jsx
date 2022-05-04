import React from "react";
import "../css/Portfolio.css";
import Carouselitem from "./Carouselitem";
import Portfolio1 from "../img/portfolio-1.png";
import Portfolio2 from "../img/portfolio-2.png";
import Portfolio3 from "../img/portfolio-3.png";
import Portfolio4 from "../img/portfolio-4.png";
import Portfolio5 from "../img/portfolio-5.png";
import Portfolio6 from "../img/portfolio-6.png";
import Portfolio7 from "../img/portfolio-7.png";
import Portfolio8 from "../img/portfolio-8.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h3 className="section--title">Últimos Trabajos</h3>

        <div className="portfolio__carousel">
          
          <Carouselitem img={Portfolio7} />
         
          <Carouselitem img={Portfolio1} />
          <Carouselitem img={Portfolio2} />
          <Carouselitem img={Portfolio3} />
          <Carouselitem img={Portfolio4} />
          <Carouselitem img={Portfolio5} />
          <Carouselitem img={Portfolio6} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
