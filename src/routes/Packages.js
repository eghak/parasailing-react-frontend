import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import PackagesCards from '../components/PackagesCards'


function Packages() {
    return (
        <div>
            <Navbar/>
            <Heroimage heading='PACKAGES' />
            <PackagesCards/>
            <Footer/>
        </div>
    )
}

export default Packages
