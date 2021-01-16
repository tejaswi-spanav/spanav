import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Carosuel(){
    return(
        <Container>
    <Carousel>
       
        <Carousel.Item>
       
          <img
            className="d-block w-100"
            src="https://tejaswi-spanav.github.io/spanav/SLIDE1.jpg "
            alt="First slide"
          />
          <Carousel.Caption>
          <Button variant="outline-light" size="lg">GET STARTED</Button>{' '}
          </Carousel.Caption>
          
        </Carousel.Item>
        

     
       
        
       
      </Carousel>
      </Container>
      );
}
export default Carosuel
