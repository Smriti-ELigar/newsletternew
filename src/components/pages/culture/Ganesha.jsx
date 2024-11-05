import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Ganesha.css";
import gandata from "../../../data/gandata.json";

export const Ganesha = () => {
  // State for the first carousel
  const [slide, setSlide] = useState(0);
  const data = gandata.carousel;

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide- 1);
  };

  return (

    <div className="container1">
      <div className="containerTop-gan"></div>
      <h1>Ganesh Chaturthi Celebrations</h1>
      <div className="containerBottom">
      <div className="col-8 content1">
            <p className="paragraph1">
            Due to oversight a few details and pictures of Ganesha utsav were missed out in the previous edition. Please find attached below the missed out portions:
<br/><br/>
Ganapati Homa at Mantry Serenity as part of Ganesha utsava<br/>
अग्ने॒ नय॑ सु॒पथा॑ रा॒ये अ॒स्मान्, विश्वा॑नि देव व॒युना॑नि वि॒द्वान् ।<br/>
The above Veda mantra states that Agni deva will show us the right path leading to happiness and liberation at the end.  Every year as part of the Ganesha utsava, we perform Maha Ganapati homa along with Navagraha homa. Sankalpa includes the following phrases “Mantri serenity gruha samucchaye, sarva aastika jananaam,…….”. This includes all residents of Mantri Serenity and their family’s well-being. We usually have the Kartas from devotees regularly coming to the temple. We also request for one MC member to be present as Karta. These Kartas take the sankalpa and perform the homa for the benefit of the entire community.
The Homa began on the second day of the utsava. Everyone at the Ganesha temple gathered in traditional attire and the ritual started with taking sankalpa. Purohits performed Navagraha homa for graha shanti of the community and finally, the Maha Ganapati homa was performed with prescribed Havis (sacrificial items like modhakas, flattened rice, ghee, sammith or dry sticks from certain trees. The poorna ahuti was provided with coconut and red cloth with ghee. 
After the Homa, the purohit performed mangala aarathi of the temple deity and also the utsava murthi. This entire process provides peace and tranquillity. We request everybody to come forward and be a part of this beautiful tradition in the future utsavas.
<br/><br/>
(provided by Sriram Raghavan)<br/>
We thank the selfless work from all the volunteers who worked in Ganesh utsava, special mention of Sri Prem who guided and took lead in planning and organizing, MC Bhanu and Pramod for managing the huge burden of logistics. 
<br/><br/>
Roopa Ganesh <br />B604


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



export default Ganesha;
