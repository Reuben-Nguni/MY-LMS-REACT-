import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    const featuredCourses = [
        {
            title: 'Business Communication and Study Skills',
            text: 'Develop essential communication and study skills for business success.',
            color: '#007bff',
            paymentLink: 'https://flutterwave.com/pay/business-communication'
        },
        {
            title: 'Principles of Microeconomics',
            text: 'Understand the fundamental concepts of microeconomics.',
            color: '#28a745',
            paymentLink: 'https://flutterwave.com/pay/microeconomics'
        },
        {
            title: 'Principles of Management',
            text: 'Learn the principles and practices of effective management.',
            color: '#6c757d',
            paymentLink: 'https://flutterwave.com/pay/principles-management'
        },
        {
            title: 'Mathematical Analysis',
            text: 'Develop advanced mathematical skills for problem-solving.',
            color: '#ffc107',
            paymentLink: 'https://flutterwave.com/pay/mathematical-analysis'
        },
        {
            title: 'Introduction to ICT',
            text: 'Explore the fundamentals of information and communication technology.',
            color: '#dc3545',
            paymentLink: 'https://flutterwave.com/pay/ict-intro'
        },
        {
            title: 'Introduction to Financial Accounting',
            text: 'Learn the principles and practices of financial accounting.',
            color: '#17a2b8',
            paymentLink: 'https://flutterwave.com/pay/financial-accounting'
        },
        {
            title: 'Applied Mathematics for IT',
            text: 'Develop essential mathematical skills for IT careers.',
            color: '#6f42c1',
            paymentLink: 'https://flutterwave.com/pay/applied-mathematics'
        },
        {
            title: 'Data Communication and Networking',
            text: 'Explore how data travels across networks securely.',
            color: '#e83e8c',
            paymentLink: 'https://flutterwave.com/pay/data-communication'
        },
        {
            title: 'Programming Techniques I',
            text: 'Develop fundamental programming skills.',
            color: '#28a745',
            paymentLink: 'https://flutterwave.com/pay/programming-techniques'
        }
    ];

    const extraCourses = [
        {
            title: 'MATHS 1100',
            text: 'Master mathematical foundations for university-level problem-solving.',
            color: '#ff5733',
            paymentLink: 'https://flutterwave.com/pay/maths1100'
        },
        {
            title: 'BIOLOGY 1110',
            text: 'Understand cell structures, genetics, and human biology basics.',
            color: '#33c9ff',
            paymentLink: 'https://flutterwave.com/pay/biology1110'
        },
        {
            title: 'PHYSICS',
            text: 'Explore classical mechanics, waves, and thermodynamics.',
            color: '#9d33ff',
            paymentLink: 'https://flutterwave.com/pay/physics'
        },
        {
            title: 'CHEMISTRY 1000',
            text: 'Learn atoms, chemical reactions, and periodic trends.',
            color: '#ffc300',
            paymentLink: 'https://flutterwave.com/pay/chemistry1000'
        },
        {
            title: 'EDU 1000',
            text: 'Understand educational psychology and instructional strategies.',
            color: '#28a745',
            paymentLink: 'https://flutterwave.com/pay/edu1000'
        },
        {
            title: 'SNE 1111',
            text: 'Inclusive education for learners with special needs.',
            color: '#fd7e14',
            paymentLink: 'https://flutterwave.com/pay/sne1111'
        },
        {
            title: 'LAN 1110',
            text: 'Introduction to linguistics and language learning.',
            color: '#6f42c1',
            paymentLink: 'https://flutterwave.com/pay/lan1110'
        }
    ];

    return (
        <Container fluid className="hero-section py-5" style={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
            <div className="text-center mb-4">
                <h1 className="display-3 fw-bold text-primary">EASY MADE</h1>
                <p className="lead">GET AN A+ WITH US.</p>
                <Link to="/login">
                    <Button variant="primary" className="m-2">Log In</Button>
                </Link>
                <Link to="/register">
                    <Button variant="secondary" className="m-2">Register</Button>
                </Link>
            </div>

            <Container>
                {/* Featured Courses in Grid */}
                <h2 className="text-center fw-bold mb-3">Featured Courses</h2>
                <Row className="g-4 mb-5">
                    {featuredCourses.map((course, idx) => (
                        <Col md={4} key={idx}>
                            <Card className="course-card d-flex flex-column h-100 shadow-sm">
                                <Card.Body className="d-flex flex-column flex-grow-1">
                                    <Link to="/login" style={{ color: course.color, textDecoration: 'none' }}>
                                        <Card.Title>{course.title}</Card.Title>
                                    </Link>
                                    <Card.Text className="flex-grow-1">{course.text}</Card.Text>
                                </Card.Body>
                                <div className="card-footer bg-transparent border-0 px-3 pb-3 pt-0">
                                    {user ? (
                                        <Button
                                            variant="success"
                                            className="w-100"
                                            onClick={() => window.location.href = course.paymentLink}
                                        >
                                            Enroll
                                        </Button>
                                    ) : (
                                        <Link to="/login">
                                            <Button variant="outline-primary" className="w-100">Login to Enroll</Button>
                                        </Link>
                                    )}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Extra Courses Scrollable */}
                <h2 className="text-center fw-bold mb-3">More Courses</h2>
                <div className="scroll-container mb-5">
                    {extraCourses.map((course, idx) => (
                        <Card key={idx} className="scroll-card shadow-sm d-flex flex-column">
                            <Card.Body className="flex-grow-1">
                                <Card.Title style={{ color: course.color }}>{course.title}</Card.Title>
                                <Card.Text>{course.text}</Card.Text>
                            </Card.Body>
                            <div className="card-footer bg-transparent border-0 px-3 pb-3 pt-0">
                                {user ? (
                                    <Button
                                        variant="success"
                                        className="w-100"
                                        onClick={() => window.location.href = course.paymentLink}
                                    >
                                        Enroll
                                    </Button>
                                ) : (
                                    <Link to="/login">
                                        <Button variant="outline-primary" className="w-100">Login to Enroll</Button>
                                    </Link>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Learners Reviews */}
                <div className="learners-section">
                    <h2 className="text-center fw-bold mb-4">What Our Learners Say</h2>
                    <div className="scroll-container">
                        {[
                            {
                                name: 'James Nyirongo',
                                text: 'This platform has transformed my learning experience but improve on online learning!'
                            },
                            {
                                name: 'Ackson Silwimba',
                                text: 'The courses are well-structured and informative. Can you add more business courses, please?'
                            },
                            {
                                name: 'Mary Banda',
                                text: 'Super helpful during my exam period. A+ experience all around!'
                            },
                            {
                                name: 'Tapiwa Chirwa',
                                text: 'I loved how simple the interface is. Everything just works.'
                            },
                            {
                                name: 'Rachel Tembo',
                                text: 'The support team really helped me when I was stuck. Highly recommend!'
                            }
                        ].map((review, idx) => (
                            <Card key={idx} className="scroll-card testimonial-card bg-white text-dark">
                                <Card.Body>
                                    <Card.Text>"{review.text}"</Card.Text>
                                    <Card.Subtitle className="mt-2 text-primary fw-bold">- {review.name}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Home;
