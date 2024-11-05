import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Editorials() {
  return (
    <div className='cards'>
      <h1>Editorials and Updates</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./editor.jpg'
              text="Editor's Note"
              label=''
              path='/editor'
            />
            <CardItem
              src='./updat.jpg'
              text='MC updates'
              label=''
              path='/mc'
            />

          </ul>

        </div>
      </div>
    </div>
  );
}

export default Editorials;