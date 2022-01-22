import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

function Contact() {
    return (
        <div>
            <Navbar/>
            <Heroimage heading='CONTACT' />
            <Form/>
            <Footer/>
        </div>
    )
}

export default Contact
