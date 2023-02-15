import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import logo from './crudlogo.png';
import { Link } from 'react-router-dom';

function SiteNavbar({ siteName }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
            <img
              src={logo}
              width="80"
              height="60"
              className="d-inline-block align-top"
              alt="Crudnews logo"
            />
          </Navbar.Brand>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
          <Navbar.Brand class="text-uppercase fw-bold text-white text-lg underline-a">{siteName}</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <Nav.Link>Home</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default SiteNavbar;
