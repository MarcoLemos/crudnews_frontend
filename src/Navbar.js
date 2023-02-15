import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import logo from './crudlogo.png';

function SiteNavbar({ siteName }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="60"
              className="d-inline-block align-top"
              alt="Crudnews logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home" class="text-uppercase fw-bold text-white text-lg underline-a">{siteName}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default SiteNavbar;
