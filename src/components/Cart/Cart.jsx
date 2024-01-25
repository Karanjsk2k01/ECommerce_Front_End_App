import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import context from '../Context/context';

const Cart = ({ open }) => {
  const cartValue = useContext(context);

  return (
    <Container>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>Item</Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>Price</Col>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>Quantity</Col>
      </Row>
      {cartValue.items.length > 0 && (
        <>
          {cartValue.items.map((item) => (
            <Row
              key={item.id}
              style={{ padding: '2.5rem 0', display: 'flex', alignItems: 'center', textAlign: 'center' }}
            >
              <Col style={{ display: 'flex', textAlign: 'center', alignItems: 'center', gap: '10px' }}>
                <img src={item.image} alt="" style={{ width: '40%', height: '40%' }} />
                {item.title}
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'center' }}>${item.price}</Col>
              <Col style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <input type="number" value={item.quantity} style={{ width: '50%' }} />
                <Button variant="danger">Remove</Button>
              </Col>
            </Row>
          ))}
        </>
      )}
      <Row style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}>Total- {cartValue.totalAmount}</Row>
    </Container>
  );
};

export default Cart;
