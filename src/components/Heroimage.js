import React, { Component } from 'react'
import './Heroimage.css'

class Heroimage extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                </div>             
            </div>
        )
    }
}

export default Heroimage
