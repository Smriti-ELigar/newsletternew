import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Magical.css";
import magicaldata from "../../../data/magicaldata.json";

export const Magical = () => {
  // State for the first carousel
  const [slideOne, setSlideOne] = useState(0);
  const dataOne = magicaldata.carouselOne;

  // State for the second carousel
  const [slideTwo, setSlideTwo] = useState(0);
  const dataTwo = magicaldata.carouselTwo;

  const nextSlideOne = () => {
    setSlideOne(slideOne === dataOne.length - 1 ? 0 : slideOne + 1);
  };

  const prevSlideOne = () => {
    setSlideOne(slideOne === 0 ? dataOne.length - 1 : slideOne - 1);
  };

  const nextSlideTwo = () => {
    setSlideTwo(slideTwo === dataTwo.length - 1 ? 0 : slideTwo + 1);
  };

  const prevSlideTwo = () => {
    setSlideTwo(slideTwo === 0 ? dataTwo.length - 1 : slideTwo - 1);
  };
  return (
    <div className="container">
      <h1>Magical Fingers</h1>
      <div className="layout">

        {/* First column: Carousel One and its paragraph */}
        <div>
          <div className="carousel-container">
            <div className="carousel">
              <BsArrowLeftCircleFill onClick={prevSlideOne} className="arrow arrow-left" />
              {dataOne.map((item, idx) => (
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  className={slideOne === idx ? "slide" : "slide slide-hidden"}
                />
              ))}
              <BsArrowRightCircleFill onClick={nextSlideOne} className="arrow arrow-right" />
              <span className="indicators">
                {dataOne.map((_, idx) => (
                  <button
                    key={idx}
                    className={slideOne === idx ? "indicator" : "indicator indicator-inactive"}
                    onClick={() => setSlideOne(idx)}
                  ></button>
                ))}
              </span>
            </div>
          </div>
          <div className="content">
            <p className="paragraph">
              Some people truly have magical fingers, able to spin, weave, and create incredible things.
              Anjani Sridharkatti from X802 was introduced to crochet in school but rekindled her interest
              during the pandemic. She has now mastered her skills and takes orders for her amazing crochet creations. Anjani is also very fond of photography. Some of you must have seen the wonderful scenic pictures posted in the Whatsapp groups.             
              </p>
          </div>
        </div>

        {/* Second column: Carousel Two and its paragraph */}
        <div>
          <div className="carousel-container">
            <div className="carousel">
              <BsArrowLeftCircleFill onClick={prevSlideTwo} className="arrow arrow-left" />
              {dataTwo.map((item, idx) => (
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  className={slideTwo === idx ? "slide" : "slide slide-hidden"}
                />
              ))}
              <BsArrowRightCircleFill onClick={nextSlideTwo} className="arrow arrow-right" />
              <span className="indicators">
                {dataTwo.map((_, idx) => (
                  <button
                    key={idx}
                    className={slideTwo === idx ? "indicator" : "indicator indicator-inactive"}
                    onClick={() => setSlideTwo(idx)}
                  ></button>
                ))}
              </span>
            </div>
          </div>
          <div className="content">
            <p className="paragraph">
              Ms. Uma Sarvesh of R1003 creates intricate designs on plates sprinkled with kumkum using only a matchstick.
              Her creativity and skill highlight her dedication and passion for her craft.
              <br />Both Anjani and Uma  are self-taught, driven by a profound inner energy that fuels their artistic endeavors. Their dedication to their crafts is truly inspiring.

            </p>

          </div>
        </div>
      </div>
    </div>
  );
};



export default Magical;
