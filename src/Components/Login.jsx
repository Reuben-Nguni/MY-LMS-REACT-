import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'; // Add custom styles here

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/login', { identifier, password });
      if (response.data && response.data.success) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-background">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="login-card">
              <Card.Body>
                <div className="text-center mb-4">
                  <FaUserCircle size={60} className="text-primary" />
                  <h2 className="mt-2">Welcome Back</h2>
                  <p className="text-muted">Login to your account</p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicIdentifier" className="mb-3">
                    <Form.Label>Email or Username</Form.Label>
                    <Form.Control
                      type="text"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Enter email or username"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 login-btn">
                    Login
                  </Button>
                </Form>

                <Nav className="justify-content-center mt-3">
                  <Nav.Item>
                    <Link to="/register" className="nav-link">
                      Don't have an account? <strong>Register</strong>
                    </Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
