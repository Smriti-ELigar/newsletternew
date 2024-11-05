import React from 'react';
import './Editorial.css';

const Editor = () => {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <h1>Editor's Note</h1>
      <div className="aboutBottom">
      <div className="col-8 textContent">
          <p className='parastyle'>
            Dear Serenites,<br /><br />
            A Plethora of festivals has made the month of Oct spiritually vibrant! The celebrations that were celebrated in our community with immense zeal has uplifted the spirits of all. The infectious energy during Navratri with the colorful spectacle of ladies dressed every day in specific colors, participation in chanting sadhana sessions, and home visits for Golu Darshan was a feast for the eyes. The icing on the cake so to say was of course the extravaganza presented by residents on the final day which concluded with people swaying in joy to the dandia numbers.
            Being a "Vibes" team member, I can see and appreciate more the incredible talent our community has. Share our joy and read what Pratham, the young author, has to say about his journey while writing his very first book and the regimen that 14-year-old Arsh Walke has to follow as a Wimbledon player.<br /><br />
            On a team update, Smitha has stepped down due to personal commitments, and we’re excited to welcome Smriti aboard.She's joining Team Serenity Vibes as a designer. Her fresh perspective and ideas will be a great addition. Here’s what Smriti has to say about herself: <br />
            “Hello! I’m Smriti, a third-year BTech student at Dayananda Sagar University in Bangalore, originally from Hubli. I’m passionate about software development, especially when it comes to building websites and applications—I find the mix of creativity and problem-solving really exciting. Outside of coding, I love to draw whenever I can; Chess is another favorite of mine—I’m drawn to its strategic depth, and it’s a fun way to challenge myself. Plus, there’s always some music playing in the background to keep me in the zone. I’m looking forward to contributing my own ideas to tech and seeing where this journey takes me!”<br /><br />
            Let's continue to celebrate our community spirit together! Stay connected! Stay Happy! Stay Blessed<br /><br />
            Cheers<br />
            Anuradha Peri
          </p>
        </div>
        <div className="col-4">
          <img src="smriti.jpg" alt="Smriti" className="profileImage" />
        </div>

      </div>
    </div>
  );
};

export default Editor;
