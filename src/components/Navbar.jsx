import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart/Cart';

const CustomNavbar = () => {

  const [open, setOpen] = useState(false);
  const expand = 'lg'; // Choose the desired expand value (e.g., lg)


  const handlerOpen = () => {
    setOpen(prev => !prev)
  }

  const handlerClose = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <Container fluid style={{ zIndex: 999 }}>
        <Navbar expand={expand} className="justify-content-center flex-grow-1" style={{ height: '6rem', overflowX: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Container fluid style={{ overflowX: 'hidden' }}>
            <Navbar.Brand href="#" style={{ fontWeight: "bold", padding: '0 15rem' }}>E-Commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1" >
                  <Nav.Link href="#action1" style={{ fontWeight: "bold", marginLeft: '10px' }}>Home</Nav.Link>
                  <Nav.Link href="#action2" style={{ fontWeight: "bold", marginLeft: '10px' }}>Store</Nav.Link>
                  <Nav.Link href="#action3" style={{ fontWeight: "bold", marginLeft: '10px' }}>About</Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1" style={{ paddingRight: '10rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handlerOpen}>
                  <Nav.Link href="#action4" style={{ fontWeight: "bold" }}>Cart - 0</Nav.Link>
                  <i className="fas fa-shopping-cart mx-2"></i>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar >

        {open && <Cart setOpen={handlerClose} />}
      </Container>
    </>
  );
}

export default CustomNavbar;
