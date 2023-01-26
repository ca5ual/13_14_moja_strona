/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import jpeg1 from '../assets/png 1.jpg';
//import jpeg2 from '../assets/png2.jpg';
//import jpeg3 from '../assets/png3.jpg';
export default class CarouselBox extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className='d-block w100' src={jpeg1} alt="forest"
                    />
                    <Carousel.Caption>
                        <h3>Fores</h3>
                        <p>Lorem11412 412 4214 124 12512412123  312</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
               </Carousel>
        )
    }
}