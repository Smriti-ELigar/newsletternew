import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Entre.css";
import entdata from "../../../data/entdata.json";

export const Entre = () => {
  // State for the first carousel
  const [slide, setSlide] = useState(0);
  const data = entdata.carousel;

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (

    <div className="container1">
      <div className="containerTop-entre"></div>
      <h1>Artistic entrepreneur </h1>
      <div className="containerBottom-entre">
        <div className="col-8 content1">
          <p className="paragraph1">
            Almost everyone in MS knows the versatile multi talented Monika Mittal.We know her mostly for the resin work that she does but for the couple of months she was also a member of Team Vibes, helping to design it. Let us take a sneak peek into her work and understand how she produces those marvellous mementos.
            <br /><br />
            <b>What is Resin Work?</b>
            <br /><br />
            Resin work is the art of creating functional and decorative items using epoxy resin. This versatile medium is mixed with a hardener and can be combined with colours, glitters, and various materials to produce unique pieces such as jewellery, home decor, and artwork. As a resin artist, I have the privilege of transforming a simple liquid into stunning, one-of-a-kind creations. My business focuses on creating art that resonates with both aesthetic beauty and emotional depth.
            <br /><br />
            <b>Since when have you been doing this?</b>
            <br /><br />
            I have been doing resin work since 2020, starting during the COVID-19 pandemic and it’s now been four years. It began as a hobby, but the love, appreciation, and support I received inspired me to pursue it professionally.
            <br /><br />
            <b>What inspired you to take up this art form</b>?
            <br /><br />
            The inspiration came from a desire to create beautiful and meaningful pieces. I not only create beautiful art but also foster a thriving business that stands out in the resin art world. Whether you are looking for a unique piece to elevate your space or a workshop to unleash your own creativity, my passion for resin art is at the heart of everything I do. One of the standout features of my work is the ability to create bespoke items tailored to individual preferences.
            <br /><br />
            <b>Do you pursue any other art?</b>
            <br /><br />
            Yes, I began my artistic journey with various forms such as Doodling, Zentangles, DIY projects, clay art, traditional Lipan art, and sculpture painting but as a hobby only. Eventually, I discovered my passion for resin artwork and took it up as a profession.
            <br /><br />
            <b>How many hours a day do you spend on this?</b>
            <br /><br />
            The number of hours I spend on resin work each day varies depending on the volume of orders I receive. My work involves not only crafting but also planning, designing, promoting, networking, and uploading videos on social media platforms. As a result, I can dedicate anywhere from several hours to a full day, depending on the workload.
            <br /><br />
            <b>Who are your customers?</b>
            <br /><br />
            I cater to a diverse audience, including both individuals and corporate clients. Gen Z to elder one my customer base spans all generations. I create a variety of resin products, including jewellery, diaries, bookmarks, nameplates, wall clocks, table clocks, fridge magnets, travel tags, keychains, pooja thalis, tea candle holders, car dashboard frames, table decors, photo frames, Rakhi, car hanging, subh labh hangings and many more. My unique selling point is offering customized items that incorporate names and photographs, which fosters emotional connections and adds a personal touch.
            <br /><br />
            <b>How do you handle competition?</b>
            <br /><br />
            By creating unique designs and offering customization, I naturally attract my customer base. My main goal is to deliver quality products, which helps build a strong and loyal clientele. Being a resin artist in a competitive landscape requires creativity, dedication, and a strategic approach. This commitment to quality ensures that my artwork is not only beautiful but also durable, giving customers confidence in their investment. The world of resin art is growing rapidly, leading to increased competition. However, I see this as an opportunity rather than a challenge. By focusing on specific themes or techniques, I differentiate myself from other artists. I prioritize building relationships with my customers to create a sense of community that encourages repeat business.
            <br /><br />
            <b>How do you see yourself ten years from now?</b>
            <br /><br />
            In ten years, I see my brand, “Monika Handmade Treasure”, as a well-known name in the resin art community. I envision having a dedicated studio where I can create unique pieces and explore innovative techniques. My goal is to expand my product line and offer a range of high-quality, customized items that resonate with customers. Ultimately, I aim to make a significant impact in the resin art world, with Monika Handmade Treasure recognized for its creativity and quality.
            <br /><br />
            Please like, share & follow my Instagram Page for unique creations. <br />
            <a
              href="https://www.instagram.com/monikahandmadetreasures/profilecard/?igsh=MTdlYjd2a3lubmpwcw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/monikahandmadetreasures/profilecard/?igsh=MTdlYjd2a3lubmpwcw==
            </a>

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



export default Entre;
