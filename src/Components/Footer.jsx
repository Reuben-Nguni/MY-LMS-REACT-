import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        alert(`Message sent from ${email}: ${message}`);
        setMessage('');
        setEmail('');
    };

    return (
        <footer className="bg-dark text-white text-center py-4">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Vision & Mission</h5>
                        <p>
                            At Easy Made, our vision is to empower learners in high school 
                            to achieve their best through innovative learning solutions. 
                            We aim to support every student in reaching their full potential.
                        </p>
                    </Col>
                    <Col md={6}>
                        <h5>Contact Us</h5>
                        <p>
                            <FaEnvelope className="mr-2" /> 
                            Email: 
                            <a href="mailto:ngunireubenjr@gmail.com" className="text-white"> ngunireubenjr@gmail.com</a>
                        </p>
                        <p>
                            <FaPhone className="mr-2" /> 
                            Phone: <a href="tel:+0970067982" className="text-white">0970067982</a>
                        </p>
                        <p>
                            <FaWhatsapp className="mr-2" />
                            WhatsApp: <a href="https://wa.me/0970067982" className="text-white">0970067982</a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Leave a Message</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Control 
                                    type="email" 
                                    placeholder="Your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Your message" 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} 
                                    required 
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Follow Us</h5>
                        <a href="https://web.facebook.com/profile.php?id=61576718240099" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://wa.me/0970067982" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                            <FaWhatsapp size={30} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; {new Date().getFullYear()} Easy Made. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

