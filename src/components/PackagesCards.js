import React from "react";
import './PackagesCards.css'
import {Link} from 'react-router-dom'

function PackagesCards() {
  return (
    <div className="packages">
      <div className="card-container">
          <div className='card'>
            <h3>- 1 Person -</h3>
            <span className='bar'></span>
            <p className='price'>$100</p>
            <p>- 30 Minutes -</p>
            <Link to='/contact' className='btn'>Contact to Book</Link>
          </div>

          <div className='card'>
            <h3>- 2 people -</h3>
            <span className='bar'></span>
            <p className='price'>$200</p>
            <p>- 30 Minutes -</p>
            <Link to='/contact' className='btn'>Contact to Book</Link>
          </div>

          <div className='card'>
            <h3>- 3 People -</h3>
            <span className='bar'></span>
            <p className='price'>$300</p>
            <p>- 30 Minutes -</p>
            <Link to='/contact' className='btn'>Contact to Book</Link>
          </div>
      </div>
    </div>
  );
}

export default PackagesCards;
