import React, { useContext, useState } from 'react';
import { Button, Card, Container, Row, Col, Offcanvas } from 'react-bootstrap';
import context from '../../Context/context';
import { v4 as uuidv4 } from 'uuid';
import Cart from '../Cart/Cart';
// import './product.css';

const productsArr = [
  {
    id: uuidv4(),
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: uuidv4(),
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: uuidv4(),
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: uuidv4(),
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const Product = () => {

  const [isCartVisible, setCartVisible] = useState(false);

  const contextValue = useContext(context)

  const addtoCartHandler = (product) => {
    const item = {
      id: product.id,
      title: product.title,
      image: product.imageUrl,
      price: product.price,
      quantity: 1,
    }

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
                  <Card.Img variant="top" src={product.imageUrl} style={{ maxWidth: '100%', height: 'auto', transform: 'scale(1)' }} />
                  <Card.Body style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      Price: ${product.price}
                    </Card.Text>
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


      )}


    </>

  );
};

export default Product;
