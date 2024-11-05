import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Badminto.css";
import baddata from "../../../data/baddata.json";

export const Badminto = () => {
  // State for the first carousel
  const [slideOne, setSlideOne] = useState(0);
  const dataOne = baddata.carouselOne;

  // State for the second carousel
  const [slideTwo, setSlideTwo] = useState(0);
  const dataTwo = baddata.carouselTwo;

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

    <div className="container2">
      <div className="containerTop1"></div>
      <h1>Ladies Badminton Tournament</h1>

      <div className="containerBottom">

        <div className="col-8 content2">
          <p className="paragraph2">
            The Annual Ladies Badminton Doubles tournament – ‘ Lady Baddies - Season 2’ event was a smashing success, bringing together talented women athletes in a spirit of friendly competition and teamwork.<br /><br />

            Organized flawlessly by Kavitha Badri (C1204) and Ranjana Vikas (C1101)*, with the support of *Smitha Srinidhi (B1901) & Smitha Patel (B1902)*, the event featured intense matches, showcasing skill and determination. The atmosphere was charged with excitement as participants demonstrated their agility, reflexes, and strategic gameplay across multiple competitive matches. Each game was a thrilling contest, with players pushing their limits to secure victory. The event was more than just a competition; it was a celebration of women's empowerment, fitness, and community. Spectators, participants & spouses alike were treated to a display of resilience and determination, with every match embodying the spirit of healthy competition and mutual respect.
            It was heartening to see women coming together, not just to compete, but to connect, share experiences, and inspire one another. The event not only celebrated athleticism but also fostered camaraderie and empowerment among the women, creating lasting memories for all involved.<br /><br />

            There were 2 categories - under 30 and above 30, with a total of 21 teams fighting it out for the coveted trophies! Kavitha Badri (C1204) and Geetha Girish ( A1204) were the winners of above 30, who beat the runners 2-0, Deepa Shettar (P1702) and Priya Jayant (P2602) in a thrilling match! Ankura (M1701) and Vaitharani (M1701), the sister duo were the winners of under 30 category and the runners were Jayati (I304) and Meenakshi (H1203), again in a 2-0 fashion! <br /><br />

            The guests of honour were Bahar Sinha and Chaya Bhat who graced the event and gave away the trophies to the winners and runners and medals to the qualifiers and semifinalists! <br /><br />

            The event saw significant support from the organisers’ friends and family as well! It was a perfect blend of fun, fitness, and community engagement, leaving everyone eager for next year’s edition!
<br/><br/>
            Bahar Sinha<br/>
            C103


          </p>
        </div>
        <div className="col-4 carousel-container2">
          <div className="carousel2">

            <BsArrowLeftCircleFill onClick={prevSlideOne} className="arrow arrow-left" />
            {dataOne.map((item, idx) => (
              <div key={idx} className={slideOne === idx ? "slide" : "slide slide-hidden"}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="carousel-image"
                />
                <div className="slide-label">{item.label}</div>
              </div>
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
          <div className="carousel2">
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
      </div>
    </div>

  );
};



export default Badminto;
