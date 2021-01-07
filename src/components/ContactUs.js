import React from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';        
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
// import SocialMediaIconsReact from 'social-media-icons-react';
var { SocialIcon } = require('react-social-icons');

function ContactUs(){
  let url="https://react-bootstrap.netlify.app/components/alerts/";
    return (
        <div className="App" style={{ backgroundColor:'black'}}>

          <div style={{color: 'white',fontSize:'22px',
    paddingTop:'50px',}}>
              
              <Container style={{textAlign:'left',}}> 
                <Row>
               
                  <Col>
                  <Col></Col>
                 
                  <Col>
                  <img style={{height:'50px'}} src="spanv_white.png"></img>
                  <br />
                 <a href="" style={{color:'white',textDecoration:'none'}}>Home</a>
                 <br />
                 <a href="" style={{color:'white',textDecoration:'none'}}>Courses</a>
                 <br />
                 <a href="" style={{color:'white',textDecoration:'none'}}>About Us</a>
                 <br />
                 {/* <p><span><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="100" /></span></p>
                  */}
                
                 </Col>
                  </Col>
                  
                  <Col>
                  <h2 style={{fontSize:'36px'}}><b><span style={{color:'#FF8C00'}}> Contact </span>Us</b></h2>
                  <b><div style={{fontSize:'16px'}}>Email: spanavedtech@gmail.com<br />
                  Phone: +91- 9963890665</div></b>
                  
                  </Col>
              


                </Row>
                <Row style={{paddingTop:'20px'}}>
                <a href=""><SocialIcon network="twitter" fgColor="white" bgColor="black" /></a>
                 <a href=""><SocialIcon network="facebook" fgColor="white" bgColor="black" /></a>
               
                 <a href=""><SocialIcon network="linkedin" fgColor="white" bgColor="black" /></a>
                 <a href=""><SocialIcon network="instagram" fgColor="white" bgColor="black" /></a>

                </Row>
                
                
                                
                </Container>
                <p style={{textAlign:'center',fontSize:'12px',paddingTop:'15px'}} >© Copyright 2020, SPANAV EDTECH Private Limited</p>
          </div>
        
        </div>
      );
}

export default ContactUs