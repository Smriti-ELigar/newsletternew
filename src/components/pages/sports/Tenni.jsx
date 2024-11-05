import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Tenni.css";
import tendata from "../../../data/tendata.json";

export const Tenni = () => {
  // State for the first carousel
  const [slide, setSlide] = useState(0);
  const data = tendata.carousel;

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide- 1);
  };

  return (

    <div className="container1">
      <div className="containerTop"></div>
      <h1>Tennis Star</h1>
      <div className="containerBottom">
      <div className="col-8 content1">
            <p className="paragraph1">
            Rising Star: Arsh Walke Shines in Tennis<br/><br/>

Meet <b>Arsh Walke</b>, a 14-year-old tennis prodigy who has made remarkable strides in his sporting journey. Since he picked up a racquet at the age of four, Arsh has been dedicated to honing his skills, consistently ensuring he walks away with at least one trophy each year, be it as a runner-up or a winner.<br/><br/>

Arsh's recent achievements are a testament to his hard work and talent. He qualified for the prestigious Wimbledon Junior Tennis Tournament in Japan, showcasing his potential on an international stage. Domestically, he has excelled in doubles competitions, clinching victories in both Hyderabad and Bangalore. Additionally, he represented his school in the U17 category, earning a Bronze Medal at the tournament.<br/><br/>

Notably, Arsh participated in the Fenesta National Level Tournament in Delhi, competing in the U14 category, where he further demonstrated his competitive spirit. Currently, he is ranked in the Top 50 in India, Top 8 in Karnataka, and Top 160 in Asia, solidifying his status as a rising star in the tennis world.

As Arsh continues to pursue his passion, the community eagerly anticipates his future achievements on and off the court. We have an eye on this talented young athlete; he’s just getting started!

            </p>
          </div>
          <div className="col-4 carousel-container1">
            <div className="carousel1">
              <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
              {data.map((item, idx) => (
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                />
              ))}
              <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
              <span className="indicators">
                {data.map((_, idx) => (
                  <button
                    key={idx}
                    className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                    onClick={() => setSlide(idx)}
                  ></button>
                ))}
              </span>
            </div>
          </div>

  

      </div>
    </div>
    
  );
};



export default Tenni;
