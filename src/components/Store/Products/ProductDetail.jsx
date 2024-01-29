import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import productsArr from '../../product';
import CustomNavbar from '../../../layout/Navbar';

const ProductDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL

  // Find the product with the matching id from productsArr
  const product = productsArr.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <CustomNavbar />
      <Container>
        <Row className='justify-content-center'>
          <Col sm={6} md={6} lg={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card className="Card" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Card.Img variant="top" src={product.imageUrl} style={{ maxWidth: '100%', height: 'auto', transform: 'scale(1)' }} />
              <Card.Body style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                {/* Add any additional details you want to display */}
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
