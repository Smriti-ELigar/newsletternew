import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Arts() {
  return (
    <div className='cards'>
      <h1>Art and Creativity</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./magical.webp'
              text="Magical Fingers"
              label=''
              path='/magical'
            />
            <CardItem
              src='./arti.webp'
              text='Artistic Entrepreneur'
              label=''
              path='/entre'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Arts;