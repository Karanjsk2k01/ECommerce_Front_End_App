import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ height: '7rem', boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Container style={{ height: '100%' }}>
        <Row className="py-3" style={{ height: '100%', display: 'display', alignItems: 'center' }}>
          <Col xs={12} md={6} sm={6}>
            <h5 className="mb-0" style={{ fontWeight: 'bold' }}>Generics</h5>
          </Col>
          <Col xs={12} md={6} sm={6} className="text-md-end">
            <i className="fab fa-spotify mx-2"></i>
            <i className="fab fa-youtube mx-2"></i>
            <i className="fab fa-facebook-f mx-2"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
