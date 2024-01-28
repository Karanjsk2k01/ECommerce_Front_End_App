import { Col, Container, Row } from 'react-bootstrap';

const AboutSection = () => {

  return (
    <>
      <Container fluid className="justify-content-center flex-grow-1 pt-5" style={{ position: 'relative', zIndex: -1 }}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Generics</h3>
      </Container>
      <Container fluid className="justify-content-center flex-grow-1 pt-5" >
        <h5 style={{ textAlign: 'center', fontWeight: 'bold' }}>About</h5>
        <Row style={{ padding: '2.5rem 0' }}>
          {/* Image Column */}
          <Col xs={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1rem' }}>
            <img src='https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png' alt='About-image' style={{ maxWidth: '50%', height: '70%' }} />
          </Col>

          {/* Text Content Column */}
          <Col xs={12} md={6} lg={6} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ width: '80%' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eaque nobis quidem voluptate? Molestiae, nihil? Blanditiis corporis aut laborum quia dolorum, tempore in, voluptatibus alias quod, inventore cumque veniam natus?</p>
          </Col>
        </Row>
      </Container>
      <Container style={{ padding: '40px 0', overflowX: 'hidden', zIndex: -1 }} >
      </Container>
    </>
  );
};

export default AboutSection;
