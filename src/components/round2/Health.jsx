import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Health() {
  return (
    <div className='cards'>
      <h1>Sports and Health</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./badminton.jpg'
              text="Lady Baddies - Season 2"
              label=''
              path='/badminto'
            />
            <CardItem
              src='./tennis.jpg'
              text="Tennis Star of MS"
              label=''
              path='/tenni'
            />

          </ul>
          <ul className='cards__items'>

            <CardItem
              src='./healthy-lifestyle.jpg'
              text='Fitness and Health'
              label=''
              path='/fitnessh'
            />
            <CardItem
              src='./bood.jpg'
              text='Blood For The Needy'
              label=''
              path='/blood'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Health;