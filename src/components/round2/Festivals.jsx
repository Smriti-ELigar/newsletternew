import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Festivals() {
  return (
    <div className='cards'>
      <h1>Festivals and Culture</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='./diwalifront.jpg'
              text='October Festivities'
              label=''
              path='/oct'
            /> 
         
         
          <CardItem
              src='./ganfront.jpg'
              text="Ganesh Chaturthi Celebrations"
              label=''
              path='/ganesha'
            />

          </ul>
          <ul className='cards__items'>
         
            
            

          </ul>

       

        </div>
      </div>
    </div>
  );
}

export default Festivals;