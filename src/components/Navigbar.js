import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Courses from './Courses';
import { NavLink } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';

const mysty={
  backgroundColor:'white',
}

const Navigbar = () => (
    
    
<Navbar  collapseOnSelect expand="lg"  style = {{
                backgroundColor: '#F5F5F5',color:'00000080', fontSize:'15px',fontWeight:'bold',height:''
            
              }} >
                <LinkContainer to="/"><Navbar.Brand><img style={{height:'50px'}}src="https://tejaswi-spanav.github.io/spanav/logo.png"></img></Navbar.Brand></LinkContainer>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav className="justify-content-end" activeKey="" >
    <Nav.Item>
    <LinkContainer to="/"><Nav.Link>HOME</Nav.Link></LinkContainer>
    </Nav.Item>
    <Nav.Item>
    <LinkContainer to="/Courses"><Nav.Link to='/Courses'>COURSES</Nav.Link></LinkContainer>
    </Nav.Item>
    <Nav.Item>
    <LinkContainer to="/Blogs"><Nav.Link to='/Blogs'>BLOGS</Nav.Link></LinkContainer>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#features">Events</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#features">About Us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href="#pricing">Contact Us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <NavDropdown title="Browse by Stream" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Coming Soon</NavDropdown.Item>
        
      </NavDropdown>
    </Nav.Item>
    <Nav.Item>
    <Button variant="warning">SIGNUP/LOGIN</Button>{' '}
    </Nav.Item>
  </Nav>
  </Navbar.Collapse>
</Navbar>


);
    

    export default Navigbar
