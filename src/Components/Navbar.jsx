import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm px-4">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img src={logo} alt="Logo" style={{ maxHeight: '30px' }} />
        <span className="ms-2 fw-bold" style={{ fontSize: '1.2rem', color: '#007bff' }}>
          EASY MADE
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
        </Nav>

        {/* Creative Search Form */}
        <Form className="d-flex position-relative" onSubmit={handleSubmit} style={{ maxWidth: '350px', width: '100%' }}>
          <InputGroup>
            <FormControl
              placeholder="Search courses & updates..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: '50px 0 0 50px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                borderRight: 'none',
                paddingLeft: '15px',
                fontSize: '0.95rem',
              }}
            />
            <Button
              variant="primary"
              type="submit"
              style={{
                borderRadius: '0 50px 50px 0',
                padding: '0 20px',
                boxShadow: '0 2px 8px rgba(0,123,255,0.4)',
                borderLeft: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0d6efd')}
            >
              🔍
            </Button>
          </InputGroup>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

