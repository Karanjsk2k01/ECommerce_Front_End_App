import React from 'react'
import { Col, Container } from 'react-bootstrap'

const Cart = ({ open }) => {
  return (
    <Container fluid className='d-flex justify-content-end mt-2' style={{
      position: 'relative', boxShadow: '-4px -4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <Col className='justify-content-end'
        style={
          {
            position: 'absolute', width: '30%', height: '100vh', display: 'flex', alignItems: 'center', zIndex: 999, right: 0,
            top: 0, backgroundColor: 'white', boxShadow: '-4px -4px 8px rgba(0, 0, 0, 0.1)'
          }
        } > Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt accusantium laboriosam repudiandae, recusandae numquam. Tempora, a, commodi similique voluptates nobis ad pariatur enim rem maxime non cupiditate quod amet.</ Col>
    </Container>
  )
}

export default Cart