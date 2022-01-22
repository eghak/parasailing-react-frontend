import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import TestimonialInfo from '../components/TestimonialInfo'

function Testimonial() {
    return (
        <div>
            <Navbar/>
            <Heroimage heading='TESTIMONIAL' />
            <TestimonialInfo/>
            <Footer/>
        </div>
    )
}

export default Testimonial
