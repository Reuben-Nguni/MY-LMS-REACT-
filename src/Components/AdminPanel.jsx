import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Table, ListGroup,
  ListGroupItem, Button, Modal
} from 'react-bootstrap';
import {
  FaUserGraduate, FaUserTie, FaCheckCircle, FaTimesCircle
} from 'react-icons/fa';

const learnersData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    enrolledCourses: 3,
    progress: 75,
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    enrolledCourses: 2,
    progress: 50,
  },
];

const AdminPanel = () => {
  const [selectedLearner, setSelectedLearner] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnerClick = (learner) => {
    setSelectedLearner(learner);
    setShowModal(true);
  };

  const handleEnroll = () => {
    setSelectedLearner((prev) => ({
      ...prev,
      enrolledCourses: prev.enrolledCourses + 1,
    }));
  };

  const handleUnroll = () => {
    setSelectedLearner((prev) => ({
      ...prev,
      enrolledCourses: Math.max(prev.enrolledCourses - 1, 0),
    }));
  };

  return (
    <Container fluid>
      {/* Cards Section (unchanged) */}
      <Row className="mb-4">
        <Col md={3}>
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>Total Learners</Card.Title>
              <h1 className="display-4">1,234</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Total Tutors</Card.Title>
              <h1 className="display-4">78</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white">
            <Card.Body>
              <Card.Title>Pending Courses</Card.Title>
              <h1 className="display-4">12</h1>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="danger" text="white">
            <Card.Body>
              <Card.Title>Rejected Courses</Card.Title>
              <h1 className="display-4">3</h1>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Learner and Tutor Sections */}
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>
              <FaUserGraduate className="me-2" />
              Learner List
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Enrolled Courses</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {learnersData.map((learner, idx) => (
                    <tr key={idx} onClick={() => handleLearnerClick(learner)} style={{ cursor: 'pointer' }}>
                      <td>{learner.name}</td>
                      <td>{learner.email}</td>
                      <td>{learner.enrolledCourses}</td>
                      <td>
                        <div className="progress">
                          <div
                            className={`progress-bar ${learner.progress >= 75 ? 'bg-success' : 'bg-warning'}`}
                            role="progressbar"
                            style={{ width: `${learner.progress}%` }}
                            aria-valuenow={learner.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {learner.progress}%
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <FaUserTie className="me-2" />
              Tutor Approval
            </Card.Header>
            <Card.Body>
              <ListGroup>
                {/* Static list - same as before */}
                <ListGroupItem className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">John Doe</div>
                    <p className="mb-1">john@example.com</p>
                    <small>Pending since 2 days ago</small>
                  </div>
                  <div>
                    <Button variant="success" size="sm" className="me-2">
                      <FaCheckCircle />
                    </Button>
                    <Button variant="danger" size="sm">
                      <FaTimesCircle />
                    </Button>
                  </div>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Jane Smith</div>
                    <p className="mb-1">jane@example.com</p>
                    <small>Pending since 1 week ago</small>
                  </div>
                  <div>
                    <Button variant="success" size="sm" className="me-2">
                      <FaCheckCircle />
                    </Button>
                    <Button variant="danger" size="sm">
                      <FaTimesCircle />
                    </Button>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Learner Detail Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Learner Details</Modal.Title>
        </Modal.Header>
        {selectedLearner && (
          <Modal.Body>
            <p><strong>Name:</strong> {selectedLearner.name}</p>
            <p><strong>Email:</strong> {selectedLearner.email}</p>
            <p><strong>Enrolled Courses:</strong> {selectedLearner.enrolledCourses}</p>
            <p><strong>Progress:</strong> {selectedLearner.progress}%</p>
            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={handleEnroll} className="me-2">
                Enroll
              </Button>
              <Button variant="warning" onClick={handleUnroll}>
                Unroll
              </Button>
            </div>
          </Modal.Body>
        )}
      </Modal>
    </Container>
  );
};

export default AdminPanel;
