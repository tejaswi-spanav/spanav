import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Courses = () => (
        <Container style={{paddingBottom:'30px'}}>
           
          <b> <h1 style={{fontSize:'100px',}}>All Courses</h1>   </b> 
           <p>All Courses That are Available at Spanav !!!</p>
           <Row>
 
<Col>
<Card style={{ width: '18rem' }}>
    
    <div style={{padding:'10px'}}>
   {/* <span> <img src="offer.png" style={{height:'50px',width:'30px',}}></img> </span> */}
        <Card.Img variant="top" src="https://tejaswi-spanav.github.io/spanav/course1.jpg" style={{height:'209',width:'111'}}/>
        </div>        

<Card.Body>
 <Card.Title> Enterpreneurship <br /> Program</Card.Title>
 <Card.Text>
A start up manual
<p><del><span>&#8377;</span>1000</del> <span>&#8377;</span>250</p>
 </Card.Text>
 <Button variant="warning">Learn More</Button>
</Card.Body>
</Card></Col>
<Col>       <Card style={{ width: '18rem' }}>
    
    <div style={{padding:'10px'}}>
   {/* <span> <img src="offer.png" style={{height:'50px',width:'30px',}}></img> </span> */}
        <Card.Img variant="top" src="https://tejaswi-spanav.github.io/spanav/course2.png" style={{height:'209',width:'111'}}/>
        </div>        

<Card.Body>
 <Card.Title>Advanced Python <br /> Program</Card.Title>
 <Card.Text>
  <p>DS & DAA using Python </p>
  <p><del><span>&#8377;</span>5000</del> <span>&#8377;</span>1000</p>
 </Card.Text>
 <Button variant="warning">Learn More</Button>
</Card.Body>
</Card>
</Col>
<Col></Col>
</Row>

        </Container>
        

    ); 


export default Courses
