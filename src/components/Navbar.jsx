import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CustomNavbar = () => {
  const expand = 'lg'; // Choose the desired expand value (e.g., lg)

  return (
    <>
      <Navbar expand={expand} className="" style={{ height: '5rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Container fluid >
          <Navbar.Brand href="#" style={{ fontWeight: "bold", padding: '0 5rem' }}>E_Commerce</Navbar.Brand>
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
              <Nav className="justify-content-center flex-grow-1" style={{ padding: '0 20rem' }}>
                <Nav.Link href="#action1" style={{ fontWeight: "bold", marginLeft: '10px' }}>Home</Nav.Link>
                <Nav.Link href="#action2" style={{ fontWeight: "bold", marginLeft: '10px' }}>Store</Nav.Link>
                <Nav.Link href="#action3" style={{ fontWeight: "bold", marginLeft: '10px' }}>About</Nav.Link>
              </Nav>
              <Nav className="justify-content-end flex-grow-1" style={{ padding: '0 2.5rem' }}>
                <Nav.Link href="#action4" style={{ fontWeight: "bold" }}>Cart</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
      <Container className="justify-content-center flex-grow-1 pt-5" style={{ height: '5rem', paddingLeft: '10rem', paddingRight: '10rem', display: 'flex', alignItems: 'center', fontWeight: "lighter" }}>
        <h3>GENERICS</h3>
      </Container>

    </>
  );
}

export default CustomNavbar;
