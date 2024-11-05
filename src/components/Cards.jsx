import React from 'react';
import './Cards.css';
import '../App.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out These Articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./rainbow.jpg'
              text="Editorial & Updates"
              label=''
              path='/editorials'
            />
            <CardItem
              src='./fest.jpeg'
              text='Festivals & culture'
              label=''
              path='/festivals'
            />
            <CardItem
              src='./art.jpeg'
              text='Art & Creativity'
              label=''
              path='/arts'
            />
          </ul>
          <ul className='cards__items'>
            
            <CardItem
              src='./sports.avif'
              text='Sports & Health'
              label=''
              path='/health'
            />
            <CardItem
              src='./lit.jpeg'
              text='Literature'
              label=''
              path='/lits'
            />
                         <CardItem
              src='./reflect.jpg'
              text='Reflections'
              label=''
              path='/reflections'
            />
            {/*
            <CardItem
              src='./healthy-lifestyle.jpg'
              text='Health & Wellness'
              label=''
              path='/fitness.jsx'
            />*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;