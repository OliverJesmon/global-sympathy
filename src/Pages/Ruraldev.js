import React from 'react';
import './Ruraldev.css'; // Import CSS file

// Import local images
import a from '../images/r1.jpg'; // First image (top-left)
import b from '../images/r2.jpg'; // Second image (top-right)
import c from '../images/r3.jpg'; // Third image (bottom)

const RuralDev = () => {
  return (
    <div className='rural-container'>
      <h2 className='ruraldev-title'>Rural Development Gallery</h2>

      <div className='image-grid'>
        <div className='top-row'>
          <img src={a} alt='Rural Development 1' />
          <img src={b} alt='Rural Development 2' />
        </div>
        <div className='bottom-row'>
          <img src={c} alt='Rural Development 3' />
        </div>
      </div>
    </div>
  );
};

export default RuralDev;