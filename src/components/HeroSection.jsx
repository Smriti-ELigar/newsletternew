import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>SERENITY VIBES</h1>
      <p>OCTOBER - 2024</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
          to='/cards'
        >
          VOLUME 34<i className='far fa-play-circle' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/team' // assuming this takes to another page
        >
          Vibes Team
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;