import React from 'react';
import { Button } from './Button';

function HeroSection() {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-full bg-black bg-opacity-20">
      {/* Background Image */}
      <img
        src="/heroback.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Main Heading */}
      <h1 className="text-white text-[100px] leading-none -mt-24 md:text-[70px] md:-mt-36 sm:text-[50px] sm:-mt-24">
        SERENITY VIBES
      </h1>

      {/* Subtitle */}
      <p className="text-white text-2xl mt-2 md:text-xl sm:text-lg">
        OCTOBER - 2024
      </p>

      {/* Buttons Container */}
      <div className="hero-btns mt-8 flex space-x-3">
        <Button
          className="btns btn-primary text-lg px-6 py-3"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => console.log('hey')}
          to="/cards"
        >
          VOLUME 34<i className="far fa-play-circle ml-1" />
        </Button>
        
        <Button
          className="btns btn-outline text-lg px-6 py-3"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/team"
        >
          Vibes Team
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
