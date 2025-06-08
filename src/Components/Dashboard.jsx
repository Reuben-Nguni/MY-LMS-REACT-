import React from 'react';
import {
  Container, Row, Col, Card, Table, ListGroup,
  ListGroupItem, Badge, ProgressBar
} from 'react-bootstrap';
import {
  FaBook, FaMoneyBillAlt, FaCheckCircle, FaClock, FaPlayCircle
} from 'react-icons/fa';

const Dashboard = () => {
  const courses = [
    {
      title: 'Introduction to Web Development',
      progress: 65,
      results: [
        { label: 'Quiz 1', score: '85%', variant: 'success' },
        { label: 'Assignment 1', score: 'B+', variant: 'warning' },
        { label: 'Final Exam', score: 'C', variant: 'danger' },
      ],
      paymentStatus: 'Paid',
      status: 'In Progress',
      startDate: '2025-03-01',
      endDate: '2025-05-15',
    },
    {
      title: 'Advanced JavaScript',
      progress: 100,
      results: [
        { label: 'Quiz 1', score: '92%', variant: 'success' },
        { label: 'Assignment 1', score: 'A', variant: 'success' },
        { label: 'Final Exam', score: 'A+', variant: 'success' },
      ],
      paymentStatus: 'Paid',
      status: 'Completed',
      startDate: '2025-01-10',
      endDate: '2025-03-20',
    },
    {
      title: 'Database Fundamentals',
      progress: 40,
      results: [
        { label: 'Quiz 1', score: 'B', variant: 'warning' },
        { label: 'Assignment 1', score: 'A-', variant: 'success' },
        { label: 'Final Exam', score: 'B+', variant: 'warning' },
      ],
      paymentStatus: 'Paid',
      status: 'In Progress',
      startDate: '2025-04-01',
      endDate: '2025-06-15',
      newAnnouncement: 'Machine Learning Fundamentals starting soon!',
    },
  ];

  return (
    <Container fluid>
      {/* Summary Cards */}
      <Row className="mb-4">
        <Col md={4}>
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>Enrolled Courses</Card.Title>
              <h1 className="display-4">3</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Completed Courses</Card.Title>
              <h1 className="display-4">1</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" text="white">
            <Card.Body>
              <Card.Title>Ongoing Courses</Card.Title>
              <h1 className="display-4">2</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Course Table */}
      <Row>
        <Col md={12}>
          <Card className="mb-4">
            <Card.Header>
              <FaBook className="me-2" />
              My Courses
            </Card.Header>
            <Card.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Status</th>
                    <th>Results</th>
                    <th>Progress</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong><FaBook className="me-2" />{course.title}</strong>
                        <div className="text-muted small">Start: {course.startDate} | End: {course.endDate}</div>
                      </td>
                      <td>
                        <Badge bg={course.status === 'Completed' ? 'success' : 'info'}>
                          {course.status === 'Completed' ? (
                            <><FaCheckCircle className="me-1" /> Completed</>
                          ) : (
                            <><FaPlayCircle className="me-1" /> In Progress</>
                          )}
                        </Badge>
                      </td>
                      <td>
                        <ListGroup>
                          {course.results.map((r, i) => (
                            <ListGroupItem key={i}>
                              {r.label}: <Badge bg={r.variant}>{r.score}</Badge>
                            </ListGroupItem>
                          ))}
                        </ListGroup>
                      </td>
                      <td>
                        <ProgressBar
                          now={course.progress}
                          label={`${course.progress}%`}
                          variant={
                            course.progress >= 80 ? 'success' :
                              course.progress >= 50 ? 'warning' : 'danger'
                          }
                        />
                      </td>
                      <td>
                        <ListGroup>
                          <ListGroupItem>
                            <FaMoneyBillAlt className="me-2" />
                            {course.paymentStatus}
                          </ListGroupItem>
                          {course.newAnnouncement && (
                            <ListGroupItem variant="info">
                              <FaBook className="me-2" />
                              {course.newAnnouncement}
                            </ListGroupItem>
                          )}
                          {course.status === 'Completed' && (
                            <ListGroupItem>
                              <FaCheckCircle className="me-2 text-success" />
                              Certificate Available
                            </ListGroupItem>
                          )}
                          {course.status === 'In Progress' && (
                            <ListGroupItem>
                              <FaClock className="me-2 text-warning" />
                              Continue Learning
                            </ListGroupItem>
                          )}
                        </ListGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
