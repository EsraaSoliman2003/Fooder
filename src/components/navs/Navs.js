import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import logo from '../../../src/imgs/logo.png';

const Navs = ()=>{
    return (
        <Navbar expand="lg fixed-top">
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#explore">Explore Foods</Nav.Link>
                <Nav.Link href="#review">Reviews</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link id="lastnav">0123456789</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
      );
}

export default Navs;