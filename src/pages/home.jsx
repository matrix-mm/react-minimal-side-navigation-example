/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';



const HomePage = () => {
  return (
    <div className='contents1'>
      <div className='main'>
        <div className='instruction'>
          <h1><a href='/'><img src='../static/weerlogo.png'></img></a></h1>
        </div>
        <div className='btn'>
        <button id="button" ><Link to="works">Works</Link></button>
        <button id="button" ><Link to="studio">Studio</Link></button>
        </div>
      </div>
    </div>
  )
}
export default HomePage;
