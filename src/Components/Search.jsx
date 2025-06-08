import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const featuredCourses = [
    {
        title: 'Business Communication and Study Skills',
        text: 'Develop essential communication and study skills for business success.',
        color: '#007bff'
    },
    {
        title: 'Principles of Microeconomics',
        text: 'Understand the fundamental concepts of microeconomics.',
        color: '#28a745'
    },
    {
        title: 'Principles of Management',
        text: 'Learn the principles and practices of effective management.',
        color: '#6c757d'
    },
    {
        title: 'Mathematical Analysis',
        text: 'Develop advanced mathematical skills for problem-solving.',
        color: '#ffc107'
    },
    {
        title: 'Introduction to ICT',
        text: 'Explore the fundamentals of information and communication technology.',
        color: '#dc3545'
    },
    {
        title: 'Introduction to Financial Accounting',
        text: 'Learn the principles and practices of financial accounting.',
        color: '#17a2b8'
    },
    {
        title: 'Applied Mathematics for IT',
        text: 'Develop essential mathematical skills for IT careers.',
        color: '#6f42c1'
    },
    {
        title: 'Data Communication and Networking',
        text: 'Explore how data travels across networks securely.',
        color: '#e83e8c'
    },
    {
        title: 'Programming Techniques I',
        text: 'Develop fundamental programming skills.',
        color: '#28a745'
    }
];

const extraCourses = [
    {
        title: 'MATHS 1100',
        text: 'Master mathematical foundations for university-level problem-solving.',
        color: '#ff5733'
    },
    {
        title: 'BIOLOGY 1110',
        text: 'Understand cell structures, genetics, and human biology basics.',
        color: '#33c9ff'
    },
    {
        title: 'PHYSICS',
        text: 'Explore classical mechanics, waves, and thermodynamics.',
        color: '#9d33ff'
    },
    {
        title: 'CHEMISTRY 1000',
        text: 'Learn atoms, chemical reactions, and periodic trends.',
        color: '#ffc300'
    },
    {
        title: 'EDU 1000',
        text: 'Understand educational psychology and instructional strategies.',
        color: '#28a745'
    },
    {
        title: 'SNE 1111',
        text: 'Inclusive education for learners with special needs.',
        color: '#fd7e14'
    },
    {
        title: 'LAN 1110',
        text: 'Introduction to linguistics and language learning.',
        color: '#6f42c1'
    }
];

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Search = () => {
    const query = useQuery().get('query')?.toLowerCase() || '';

    const allCourses = [...featuredCourses, ...extraCourses];

    const filteredCourses = allCourses.filter(course => 
        course.title.toLowerCase().includes(query) || course.text.toLowerCase().includes(query)
    );

    return (
        <Container className="py-5">
            <h2 className="mb-4 text-center">
                Search Results for: <span className="text-primary">"{query}"</span>
            </h2>

            {filteredCourses.length === 0 ? (
                <p className="text-center fs-5">No data found matching your search.</p>
            ) : (
                <Row className="g-4">
                    {filteredCourses.map((course, idx) => (
                        <Col md={4} key={idx}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title style={{ color: course.color }}>
                                        {course.title}
                                    </Card.Title>
                                    <Card.Text>{course.text}</Card.Text>
                                    <Link to="/login">
                                        <Button variant="primary" className="mt-3 w-100">
                                            Login to Enroll
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Search;

