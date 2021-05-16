import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class Carousel1 extends Component {
    render() {
        return (
            <div className="container mt-3" >
               
               <Carousel fade interval={1000}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3807332/pexels-photo-3807332.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="First slide"
      height="450px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3806953/pexels-photo-3806953.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Second slide"
      height="450px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3995921/pexels-photo-3995921.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt="Third slide"
      height="450px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
