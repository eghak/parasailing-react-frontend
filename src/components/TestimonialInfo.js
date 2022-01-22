import React from 'react'
import {Link} from 'react-router-dom'
import './TestimonialInfo.css'

import ParasailingImg2 from '../assets/parasailingImg2.jpg'
import ParasailingImg3 from '../assets/parasailingImg3.jpg'


function TestimonialInfo() {
    return (
        <div className='testimonial'>

            <div className='left'>
                <h1>What our happy adventurers say about us</h1>
                <p className='testimony'>"We're glad to choose PARASAILING to help us create a great parasailing memory! Very friendly and happy crew!"</p>
                <p>- John Doe -</p>
                <p className='testimony'>"Our family had a great fun parasail with PARASAILING! Very affordable price for a great service!"</p>
                <p>- Jane Doe -</p>
                <br/>
                <Link to='/packages'><button className='btn'>BOOK NOW</button></Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={ParasailingImg2} className='img' alt='' />
                    </div>

                    <div className='image-stack bottom'>
                        <img src={ParasailingImg3} className='img' alt='' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestimonialInfo
