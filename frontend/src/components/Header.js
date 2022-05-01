import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <Navbar className='navbar' expand='lg' variant='dark'>
      <Container>
        <Navbar.Brand href='#home' className='logo'>
          Camp Ya!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <Nav.Link href='#home' className='link'>
              Home
            </Nav.Link>
            <Nav.Link href='#home' className='link'>
              About
            </Nav.Link>
            <Nav.Link href='#home' className='link'>
              Register
            </Nav.Link>
            <Nav.Link href='#home' className='link'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
