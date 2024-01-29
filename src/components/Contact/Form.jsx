import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Forms = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    agreeTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };



  const handleSubmit = async (event) => {


    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Send POST request
    try {
      const response = await fetch('https://react-api-demo-f9b0e-default-rtdb.firebaseio.com/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      console.log('Form submitted successfully!');

      const data = await response.json();

      console.log(data)

      // Reset the form
      form.reset();
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        agreeTerms: false,
      });


    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
    setValidated(true);
  };

  return (
    <Container className='fluid d-flex flex-column gap-5 align-items-center justify-content-center flex-grow-1 p-5 mb-5 container-lg'>
      <h5 className='text-center'>Contact-Us</h5>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group className="mb-5" as={Col} md="12" lg="6" controlId="validationCustom01">
            <Form.Label style={{ fontWeight: 'bold' }}>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-5" as={Col} md="12" lg="6" controlId="validationCustom02">
            <Form.Label style={{ fontWeight: 'bold' }}>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-5" controlId="validationCustom03">
          <Form.Label style={{ fontWeight: 'bold' }}>Email_id</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5" controlId="validationCustom03">
          <Form.Label style={{ fontWeight: 'bold' }}>Phone_number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone_number"
            required
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a Phone number
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-5">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
}

export default Forms;