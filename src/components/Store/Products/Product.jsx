import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Offcanvas } from 'react-bootstrap';
import context from '../../Context/context';

import Cart from '../../Store/Cart/Cart';
// import './product.css';
import productsArr from '../../product';
import AuthContext from '../../Context/Auth-context';
import { storeCartItemInBackend, getCartItemsFromBackend } from '../../BackEndFetch';


const Product = () => {

  const isMounted = useRef(true);

  const [isCartVisible, setCartVisible] = useState(false);

  const contextValue = useContext(context)
  const AuthValue = useContext(AuthContext)

  const sanitizeEmail = (email) => {
    return email.replace(/[@.]/g, '');
  };

  const email = sanitizeEmail(AuthValue.emailId)

  useEffect(() => {

    if (isMounted.current) {
      const fetchCartItems = async () => {
        try {
          const items = await getCartItemsFromBackend(email);

          const loadedCart = [];

          for (const key in items) {
            const cartItem = items[key];

            // Separate each cart item and push it to the context API
            contextValue.addItem({
              id: cartItem.id,
              title: cartItem.title,
              image: cartItem.image,
              price: cartItem.price,
              quantity: cartItem.quantity,
            });

            // Optionally, you can also push each cart item to the local loadedCart array
            loadedCart.push({
              id: cartItem.id,
              title: cartItem.title,
              image: cartItem.image,
              price: cartItem.price,
              quantity: cartItem.quantity,
            });
          }

          return loadedCart

        } catch (error) {
          console.error('Error fetching cart items:', error);

        }
      };



      fetchCartItems()
      isMounted.current = false;

    }
  }, []);



  const addtoCartHandler = (product) => {
    const item = {
      id: product.id,
      title: product.title,
      image: product.imageUrl,
      price: product.price,
      quantity: 1,
    }


    storeCartItemInBackend(email, item)
    contextValue.addItem(item)


  }

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };



  return (
    <>
      <Container fluid className="justify-content-center flex-grow-1 pt-5" style={{ position: 'relative', zIndex: -1 }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Generics</h3>
      </Container>
      <Container style={{ padding: '40px 0', overflowX: 'hidden', zIndex: -1 }} >
        <Row className='justify-content-center'>
          {
            productsArr.map((product) => (
              <Col key={product.id} sm={6} md={6} lg={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Card className="Card" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Img variant="top" src={product.imageUrl} style={{ maxWidth: '100%', height: 'auto', transform: 'scale(1)' }} />
                  </Link>
                  <Card.Body style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }} >
                      <Card.Title style={{ padding: '5px 0', textAlign: 'center' }}>{product.title}</Card.Title>
                      <Card.Text style={{ padding: '10px 0', textAlign: 'center' }}>
                        Price: ${product.price}
                      </Card.Text>
                    </Link>
                    <Button variant="primary" onClick={() => addtoCartHandler(product)}>Add to Cart</Button>
                  </Card.Body>
                </Card>

              </Col>
            ))
          }
        </Row>
      </Container>
      <Container className="justify-content-center flex-grow-1 p-3" style={{ display: 'flex', alignItems: 'center', overflowX: 'hidden', padding: '2.5px 0' }}>
        <Button variant="warning" style={{ fontWeight: 'bold' }} onClick={showCartHandler}>
          See Cart
        </Button>{' '}
      </Container>

      {isCartVisible && (
        <Offcanvas show={isCartVisible} onHide={hideCartHandler} placement="end" style={{ width: '35rem' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Cart setOpen={hideCartHandler} />
          </Offcanvas.Body>
        </Offcanvas>
      )}

    </>

  );
};

export default Product;
