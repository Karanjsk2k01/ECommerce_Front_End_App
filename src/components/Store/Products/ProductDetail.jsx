import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import productsArr from '../../product';
import CustomNavbar from '../../../layout/Navbar';
import Footer from '../../../layout/Footer';
import context from '../../Context/context';
import AuthContext from '../../Context/Auth-context';
import { storeCartItemInBackend, getCartItemsFromBackend } from '../../BackEndFetch';



const ProductDetail = () => {


  const { id } = useParams();

  // Find the product with the matching id from productsArr
  const product = productsArr.find((p) => p.id === id);

  const contextValue = useContext(context)
  const AuthValue = useContext(AuthContext)

  const sanitizeEmail = (email) => {
    return email.replace(/[@.]/g, '');
  };

  const email = sanitizeEmail(AuthValue.emailId);

  if (!product) {
    return <p>Product not found</p>;
  }


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



  return (
    <>
      <CustomNavbar />
      <Container className='fluid d-flex  gap-5 align-items-center justify-content-center flex-grow-1 p-5 mb-5 container-lg' style={{ height: '70vh' }}>
        <Row className='justify-content-center' style={{ height: '100%' }}>
          <Col sm={6} md={6} lg={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={product.imageUrl} alt="" />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col sm={6} md={6} lg={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5>Title - {product.title}</h5>
          </Col>
          <Col sm={6} md={6} lg={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h5>Price - {product.price}</h5>
          </Col>
          <Col sm={6} md={6} lg={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
            <Button variant="primary" onClick={() => addtoCartHandler(product)}>Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
