import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart/Cart';
import context from './Context/context';

const CustomNavbar = () => {

  const contextValue = useContext(context)
  const [open, setOpen] = useState(false);
  const expand = 'lg'; // Choose the desired expand value (e.g., lg)

  const handlerOpen = () => {
    setOpen(true);
  }

  const handlerClose = () => {
    setOpen(false);
  }


  return (
    <>
      <Navbar expand={expand} className="justify-content-center flex-grow-1" style={{ height: '6rem', overflowX: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Container fluid style={{ overflowX: 'hidden', display: 'flex', justifyContent: 'space-around' }}>
          <Navbar.Brand href="#" style={{ fontWeight: "bold", flexGrow: 1, display: 'flex', justifyContent: 'center' }}>E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-center flex-grow-1" style={{ margin: '0 40px', display: "flex", alignItems: 'center' }}>
              <Nav className="justify-content-center flex-grow-1" >
                <Nav.Link href="#action1" style={{ fontWeight: "bold", marginLeft: '10px' }}>Home</Nav.Link>
                <Nav.Link href="#action2" style={{ fontWeight: "bold", marginLeft: '10px' }}>Store</Nav.Link>
                <Nav.Link href="#action3" style={{ fontWeight: "bold", marginLeft: '10px' }}>About</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className="justify-content-end flex-grow-0.5" style={{ margin: '0 40px', display: "flex", justifyContent: 'center', alignItems: 'center', flex: 1 }} onClick={handlerOpen}>
            <Nav.Link href="#action4" style={{ fontWeight: "bold", margin: '0 1px', flexGrow: 1, display: "flex", justifyContent: 'end' }}>Cart-{contextValue.items.length}</Nav.Link>
            <i className="fas fa-shopping-cart mx-2" style={{ fontWeight: "bold", margin: '0 1px', flexGrow: 1 }}></i>
          </Nav>
        </Container>

      </Navbar >
      <Offcanvas show={open} onHide={handlerClose} placement="end" style={{ width: '35rem' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Content of your Offcanvas goes here */}
          <Cart setOpen={handlerClose} />
        </Offcanvas.Body>
      </Offcanvas>


    </>
  );
}

export default CustomNavbar;
