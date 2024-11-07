import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./oct.css";
import octdata from "../../../data/octdata.json";
export const Oct = () => {
  const [slideOne, setSlideOne] = useState(0);
  const dataOne = octdata.carouselOne;

  // State for the second carousel
  const [slideTwo, setSlideTwo] = useState(0);
  const dataTwo = octdata.carouselTwo;

  const [slideThree, setSlideThree] = useState(0);
  const dataThree = octdata.carouselThree;

  const [slideFo, setSlideFo] = useState(0);
  const dataFo = octdata.carouselFo;

  const [slideFi, setSlideFi] = useState(0);
  const dataFi = octdata.carouselFi;

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
  const nextSlideThree = () => {
    setSlideThree(slideThree === dataThree.length - 1 ? 0 : slideThree + 1);
  };

  const prevSlideThree = () => {
    setSlideThree(slideThree === 0 ? dataThree.length - 1 : slideThree - 1);
  };
  const nextSlideFo = () => {
    setSlideFo(slideFo === dataFo.length - 1 ? 0 : slideFo + 1);
  };

  const prevSlideFo = () => {
    setSlideFo(slideFo === 0 ? dataFo.length - 1 : slideFo - 1);
  };
  const nextSlideFi = () => {
    setSlideFi(slideFi === dataFi.length - 1 ? 0 : slideFi + 1);
  };

  const prevSlideFi = () => {
    setSlideFi(slideFi === 0 ? dataFi.length - 1 : slideFi - 1);
  };
  return (

    <div className="container-oct">
      <div className="containerTop-oct"></div>
      <h1>Significance of Navratri</h1>

      <div className="containerBottom-oct">

        <div className="content-oct">
          <p className="paragraph-oct">
            Dussera, or Navarathri, is a ten-day Hindu festival celebrated in the month of Ashvina. It symbolises the victory of good over evil. It commemorates the Goddess Durga’s defeat of the demon Mahishasura, particularly celebrated during Durga Puja in West Bengal, and Lord Rama’s triumph over Ravana in the epic Ramayana.<br /><br />

            Across India, the festival takes on regional flavours. In Northern India, grand ceremonies feature the burning of giant effigies of Ravana, Meghnath, and Kumbhakarna, accompanied by Ramlila performances. In the East, Durga Puja involves elaborate rituals and the immersion of Goddess Durga’s idols into water bodies.<br /><br />

            Southern India celebrates with the unique Golu tradition, where dolls are displayed in a stepped arrangement. These represent the hierarchy of life—from daily existence to divine figures—symbolising the soul’s journey toward spiritual liberation. Mysore, Karnataka, hosts a royal procession, highlighting the region's rich cultural heritage.<br /><br />

            Despite these regional variations, Dussera unites the nation in celebrating the timeless message of the triumph of good over evil. From Ramlila to Durga Puja to Golu, it offers a vibrant cultural mosaic that reflects India's diversity and shared values.<br /><br />

            Sangeetha <br />
            K1001

          </p>
        </div>
        <div className="carousel-container-oct">
          <div className="carousel-oct">
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

          <div className="content-oct">
            <h1>Navratri celebrations in MS</h1>
            <p className="paragraph-oct">
            Residents overview of Navratri celebrations in MS:

              Ankurarpane, the ritual of sprouting seeds is a symbolic representation of new beginnings, growth, and celebration of life. This was celebrated on first day of Navaratri, marking the onset of the nine-day festival.Ladies decked in green sarees got together for the ritual which involved putting nine types of grains or seeds in small pots. These seeds sprouted well through the festival.The act of nurturing these sprouts mirrors the nurturing of life and positive outcomes.<br />

              After ankurarpane, Kalasa pooje was performed in club house. Kalasa, an earthenware pot, symbolizing the presence of the Divine, was decorated with mango leaves, coconut, and filled with water, signifying the source of life.<br /><br />
              Kalasa is believed to invoke the divine energy of Goddess Durga.
              Club house witnessed the grandeur of elaborate displays of dolls and figurines depicting Gods, Goddesses, and various themes from Hindu mythology and folklore, traditional village life scenes, weddings, festivals, and daily activities.<br /><br />

              Alongside the display of dolls, evening bhajan sessions were conducted by the residents with taala, beats, and dance, which enriched the Navaratri celebrations. <br /><br />

              The combination of Navaratri dolls and bhajan evenings during the festival not only reflects the religious and cultural significance of Navaratri but also provided an opportunity for community to come together, and engage in collective celebration. <br /><br />

              Thanks to the MCs: Anurag, Bhanu, and Ganesh for providing the required support. Kudos to cultural committee volunteers for their efforts in bringing the residents together and putting up a great show - Nisha, Padmini, Roopa, Shilpashree, Soumya Keshav, Soumya Srinivasa, and Varsha. <br /><br />

              Roopa Ganesh <br />
              B604


            </p>
          </div>
          <div className="carousel-oct">
            <BsArrowLeftCircleFill onClick={prevSlideFo} className="arrow arrow-left" />
            {dataFo.map((item, idx) => (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slideFo === idx ? "slide" : "slide slide-hidden"}
              />
            ))}
            <BsArrowRightCircleFill onClick={nextSlideFo} className="arrow arrow-right" />
            <span className="indicators">
              {dataFo.map((_, idx) => (
                <button
                  key={idx}
                  className={slideFo === idx ? "indicator" : "indicator indicator-inactive"}
                  onClick={() => setSlideFo(idx)}
                ></button>
              ))}
            </span>
          </div>

          <div className="content-oct">
            <h1>A Spectacular Navratri at Mantri Serenity</h1>
            <p className="paragraph-oct">
            The vibrant spirit of Navratri came alive at Mantri Serenity with a magnificent celebration that brought our community together. The festivities began with a Ram Parivar Shobha Yatra, where our young residents led a procession amidst the rhythmic beats of dhol. Women dressed in elegant saffron attire created a mesmerizing sight as flower petals showered upon the holy procession.<br/><br/>

The cultural program that followed showcased the incredible talent within our community. Residents, both young and old, presented an array of performances including classical dances, traditional skits, and soul-stirring renditions of shlokas and bhajans.<br/><br/>

As dusk fell, the age-old tradition of Ravan Dahan symbolized the victory of good over evil, accompanied by a spectacular fireworks display. The evening culminated in a high-energy dandiya night, where residents danced to contemporary beats, bringing a perfect blend of tradition and modernity to our celebration.
<br/><br/>
By<br/>
Manisha Pareek

            </p>
          </div>
          
          <div className="carousel-oct">
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
          
          <div className="content-oct">
            <h1>Karva Chauth Celebrations </h1>
            <p className="paragraph-oct">
            Karva Chauth celebrations at Mantri Serenity were a vibrant showcase of tradition and community spirit.

Karva Chauth is a significant Hindu festival celebrated predominantly in North India, a fast is observed by married women for the well-being and longevity of their husbands.<br/><br/>

The ladies dressed up in beautiful attire. Mehendi artists were brought in who applied intricate Mehendi designs to multiple women in the society.<br/><br/>

The evening commenced with prayers, listening to the "Karva Chauth Katha" followed by the sighting of the moon through decorated thalis. Upon seeing the moon, the ladies broke their fast with Water, Mathri and Sweets.<br/><br/>

The celebration not only honoured the customs of Karva Chauth but also strengthened bonds among the residents of Mantri Serenity<br/><br/>

Special thanks to the MC at Mantri Serenity for supporting us in organising the celebration, Minal Pali and Vanshika Gupta for making the photobooth.
<br/><br/>

Anuradha Gupta (X204) and Kanchan Vijay (Block 2)

            </p>
          </div>
          
          <div className="carousel-oct">
            <BsArrowLeftCircleFill onClick={prevSlideThree} className="arrow arrow-left" />
            {dataThree.map((item, idx) => (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slideThree === idx ? "slide" : "slide slide-hidden"}
              />
            ))}

            <BsArrowRightCircleFill onClick={nextSlideThree} className="arrow arrow-right" />
            <span className="indicators">
              {dataThree.map((_, idx) => (
                <button
                  key={idx}
                  className={slideThree === idx ? "indicator" : "indicator indicator-inactive"}
                  onClick={() => setSlideThree(idx)}
                ></button>
              ))}
            </span>
          </div>
          
          <h1>Diwali Celebrations at MS</h1>

          <div className="carousel-oct">
            <BsArrowLeftCircleFill onClick={prevSlideFi} className="arrow arrow-left" />
            {dataFi.map((item, idx) => (
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className={slideFi === idx ? "slide" : "slide slide-hidden"}
              />
            ))}
            <BsArrowRightCircleFill onClick={nextSlideFi} className="arrow arrow-right" />
            <span className="indicators">
              {dataFi.map((_, idx) => (
                <button
                  key={idx}
                  className={slideFi === idx ? "indicator" : "indicator indicator-inactive"}
                  onClick={() => setSlideFi(idx)}
                ></button>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Oct
