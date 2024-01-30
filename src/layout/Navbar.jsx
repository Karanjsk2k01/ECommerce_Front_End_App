import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from '../components/Store/Cart/Cart';
import context from '../components/Context/context';
import AuthContext from '../components/Context/Auth-context';
import { useNavigate } from 'react-router-dom';


const CustomNavbar = () => {

  const authContextValue = useContext(AuthContext)
  const navigate = useNavigate()
  const contextValue = useContext(context)
  const [open, setOpen] = useState(false);
  const expand = 'lg'; // Choose the desired expand value (e.g., lg)

  const handlerOpen = () => {
    setOpen(true);
  }

  const handlerClose = () => {
    setOpen(false);
  }

  const logoutHandler = () => {
    authContextValue.logout()

    navigate('/')
  }

  const total = contextValue.items.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return (
    <>
      <Navbar expand={expand} className="justify-content-center flex-grow-1" style={{ height: '6rem', overflowX: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Container fluid style={{ overflowX: 'hidden', display: 'flex', justifyContent: 'space-around' }}>
          <Navbar.Brand href="/" style={{ fontWeight: "bold", flexGrow: 1, display: 'flex', justifyContent: 'center' }}>E-Commerce</Navbar.Brand>
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
                <Nav.Link href="/" style={{ fontWeight: "bold", marginLeft: '10px' }}>Home</Nav.Link>

                {authContextValue.isLoggenIn && <Nav.Link href="/Store" style={{ fontWeight: "bold", marginLeft: '10px' }}>Store</Nav.Link>}

                <Nav.Link href="/About" style={{ fontWeight: "bold", marginLeft: '10px' }}>About</Nav.Link>
                <Nav.Link href="/Contact" style={{ fontWeight: "bold", marginLeft: '10px' }}>Contact</Nav.Link>

                {!authContextValue.isLoggenIn && <Nav.Link href='/Auth' style={{ fontWeight: "bold", marginLeft: '10px' }}>Login</Nav.Link>}

                {authContextValue.isLoggenIn && <Nav.Link href='/Auth' style={{ fontWeight: "bold", marginLeft: '10px' }} onClick={logoutHandler}>Logout</Nav.Link>}

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Nav className="justify-content-end flex-grow-0.5" style={{ margin: '0 40px', display: "flex", justifyContent: 'center', alignItems: 'center', flex: 1 }} onClick={handlerOpen}>
            <Nav.Link href="#" style={{ fontWeight: "bold", margin: '0 1px', flexGrow: 1, display: "flex", justifyContent: 'end' }}>Cart-{total}</Nav.Link>
            <i className="fas fa-shopping-cart mx-2" style={{ fontWeight: "bold", margin: '0 1px', flexGrow: 1 }}></i>
          </Nav>
        </Container>

      </Navbar >
      <Offcanvas show={open} onHide={handlerClose} placement="end" style={{ width: '35rem' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart setOpen={handlerClose} />
        </Offcanvas.Body>
      </Offcanvas>


    </>
  );
}

export default CustomNavbar;
