import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'} >
            <Link to='/'><img src={Logo} className='logoImg' alt=''></img></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/packages'>Packages</Link>
                </li>
                <li>
                    <Link to='/testimonial'>Testimonial</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick} >
                {click ? (<FaTimes size={20} style={{color: 'white'}} />) : (<FaBars size={20} style={{color: 'white'}}/>)}
            </div>
        </div>
    )
}

export default Navbar
