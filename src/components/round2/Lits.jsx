import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./lits.css";
import { Button } from '../Button';
import litsdata from "../../data/litsdata.json";
export const Lits = () => {
  // State for the first carousel
  const [slide, setSlide] = useState(0);
  const data = litsdata.carousel;

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (

    <div className="container-lits">
      <div className="containerTop-lits"></div>
      <h1>The Pleasure of Turning Pages</h1>
      <div className="containerBottom-lits">
        <div className="content-lits">
          <p className="paragraph-lits">
            Picture this: it’s a rainy day, you’re curled up in your cozy corner, a steaming cup of chai or coffee beside you, and your favourite book in hand, transporting you to a magical world!!!<br /><br />

            Are people still reading the way they used to? Is the art of reading slowly fading? The smell of freshly printed pages, the satisfying feel of turning them, and the pleasure of highlighting key passages with your favourite sketch pen—these experiences seem to be slipping away. No offense to Kindle and other digital reading platforms, which are great in their own right, but there's something truly unmatched about reading a physical book. Remember keeping handmade bookmarks, a chocolate wrapper, or even a pressed flower between the pages? Those personal touches made reading more than just an activity; they made it a ritual.<br /><br />

            Let’s come together to revive the art and joy of reading books and show the next generation that there’s nothing like holding a book and getting lost in its pages.<br /><br />

            To keep this culture alive, we present two budding authors from our own MS, Pratham and Karthika, who are here to help reignite the art of reading. These dedicated individuals have created books to help preserve this fading art form. Through their efforts, they're playing a vital role in keeping these timeless traditions alive and contributing meaningfully to the community. Let’s show our appreciation and encouragement for their remarkable contribution to the society.<br /><br />

            Also visit and explore our MS library in our Club house, where a wide selection of books awaits all book lovers and dive into your favourite one today!<br /><br />

            <b>Pratham </b>an 18-year-old resident of MS, captivated by the *Goosebumps* series, is inspired to write a novel about a journalist uncovering hidden secrets and wielding supernatural powers. His ideas flow from his dreams, which he records and transforms into gripping stories. As he writes, he realizes he possesses a God-like ability to control everything around him—even his dreams—turning his imagination into a reality that blurs the line between fiction and fate.<br /><br />

            A 12th-grade student, working hard to juggle both his academics and his love for writing, is determined to grow into a well-rounded individual at a young age. Wishing all the very best to the aspiring scientist, entrepreneur, and author! Stay tuned—his debut book is now available on Amazon, and the sequel is on the way.
          </p>
        </div>
        <div className="carousel-container-lits">
          <div className="carousel-lits">
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
        <p className="paragraph-lits2">
          While you are waiting for Amazon to deliver Prathams book, you can read a short story by Karthika of O-2001.<br /><br />

          <b>Karthika Amareswari </b> is  a student of Class 7. Her interest in writing began when she attended a  summer camp  called “Open Your Mind” which was conducted by one of her mother’s friends.<br /><br />

          She says "I wanted to use versatile vocabulary and write in the perfect British style ,but I ended up getting  a bit lost to the end hence ending the story suddenly and abruptly. I hope on extending the story and modifying the climax in a more exciting and thrilling manner if there is a bit of interest shown by readers on this story.I would sincerely appreciate any feedback given by the readers."  <br /><br />


          The heavenly smell of freshly baked choco-chip cookies hit Evelyn’s nose as she entered the baking unit of the Royal Kitchen. The kitchen was bustling with noise, the limit of two more hours to finish cooking getting everyone nervous and hurried, Ms. Daisy especially. Ms. Daisy was shouting out orders to the servants clearly annoyed at the delay. Evelyn reached out and tapped her on the shoulder causing her to whip around, scowl evident on her plump face. Realising who she was facing, Ms. Daisy immediately changed her demeanour, adjusting her white apron which was laid perfectly in contrast with her black puffy dress.<br />
          “Heavens! My apologies your highness... The kitchen is a bit worked up today and things are bit delayed.” she said a frown forming on her face, casting her blue eyes down.<br />
          “Ms. Daisy I am quite sure that my sister would be--,” Evelyn started to reply before she was cut off by the frantic head cook.<br />
          “I will make sure that Her Majesty is not disappointed with her supper tonight. I-I promise! I am greatly sorry.” <br />
          “Dear heavens! Ms. Daisy I was going to say that my sister would be alright if there was a slight delay in serving supper as it has been a hectic day in the kitchen. I shall go and inform her. Now don’t worry your head off about it please.” Said Evelyn smiling sweetly at the cook who looked up with an unexplainable look of relief on her face.<br />
          “I’m grateful, Your Highness!”<br />
          Evelyn walked out of the kitchen, a smile of amusement playing on her lips, shaking her head with at the actions of the cook, swaying her dark blonde hair in the movement.<br />
          The cook had been her mother’s—Late Majesty Lysandra--absolute favourite. She remembered how she would sit together with her older brother and sister, listening to the stories their mother would tell, after retiring from her duties as the ruler Veridian Glade, all while sipping on Ms. Daisy’s famous hot chocolate.<br />
          “Evvie!”<br />
          Evelyn turned around at the nickname, her eyes searching for the owner of the deep voice until she met a pair of dark chocolate eyes. She smiled at her older brother who was panting sweat beading his forehead, hand on his knees and back slightly hunched.<br />
          “Dear Gods! What on earth have you been running for, Ethan? It seems like something important.”<br />
          Her smile slightly diminished when Ethan looked up at her with look of extreme sadness, grief and ... she couldn’t put her finger on the other one, guilt?! <br />
          “You have to see something.” he said, still not smiling. Evelyn noticed the slightest quaver in his voice.<br />
          However, Evelyn simply followed as her smile vanished completely, when she realised the seriousness of the situation, she was still not completely aware of.<br />
          She followed her brother into the inner chambers of her sister, Her Majesty Elena, who was to be crowned queen as per her mother’s wish. With every moment her heart beat faster as she noticed the heads of the maid servants hung down, not one daring to look up.<br />
          Entering her Elena’s room she took in the environment, light beige walls decked with paintings of the members of her family, Large white wardrobes, light reflecting from the huge semicircle mirror of the dressing table and---- <br /><br />
          <a
          href='/evelyn'
          style={{ color: 'blue', textDecoration: 'none', fontSize: 'large' }}
          onClick={() => console.log('hey')}
          
        >
          To know what Evelyn found out please click here!
        </a>
        </p>
        
        {/* <Button
          className='btns'
          buttonStyle='btn--outline2'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
          to='/evelyn'
        >
          To know what Evelyn found out please click here!
        </Button> */}
      </div>
    </div>

  );
};
export default Lits
