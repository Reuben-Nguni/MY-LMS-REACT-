import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TutorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [courses, setCourses] = useState([]);
  const [tutor, setTutor] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, coursesRes] = await Promise.all([
          axios.get('/api/tutor/profile'),
          axios.get('/api/tutor/courses')
        ]);
        setTutor(profileRes.data);
        setCourses(coursesRes.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="mt-4">
            <h4>Welcome back, {tutor.name}</h4>
            <p><i className="bi bi-envelope"></i> {tutor.email}</p>
            <p><i className="bi bi-journal-text"></i> Total Courses: {courses.length}</p>
          </div>
        );

      case "courses":
        return (
          <div className="row mt-4">
            {courses.map(course => (
              <div className="col-md-6 col-lg-4 mb-3" key={course._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title"><i className="bi bi-journal-text me-1"></i>{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <a href={`/dashboard/tutor/courses/${course._id}`} className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-pencil-square me-1"></i>Manage
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "upload":
        return (
          <div className="mt-4">
            <h5><i className="bi bi-cloud-upload-fill me-2"></i>Upload New Course</h5>
            <form>
              <div className="mb-3">
                <label className="form-label">Course Title</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Upload Video</label>
                <input type="file" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-upload me-1"></i>Submit
              </button>
            </form>
          </div>
        );

      case "learners":
        return (
          <div className="mt-4">
            <h5><i className="bi bi-people-fill me-2"></i>Enrolled Learners</h5>
            <ul className="list-group">
              {/* Replace with dynamic data */}
              <li className="list-group-item">👤 John Doe - Course A</li>
              <li className="list-group-item">👤 Jane Smith - Course B</li>
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {/* Profile Section */}
      <div className="text-center mb-4">
        <img
          src="https://via.placeholder.com/100"
          className="rounded-circle border border-primary p-1"
          alt="Tutor Avatar"
        />
        <h2 className="mt-2"><i className="bi bi-person-circle me-2"></i>{tutor.name}</h2>
        <p className="text-muted">{tutor.email}</p>
      </div>

      {/* Nav Tabs */}
      <ul className="nav nav-pills justify-content-center mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            <i className="bi bi-house-door-fill me-1"></i>Overview
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'courses' ? 'active' : ''}`} onClick={() => setActiveTab('courses')}>
            <i className="bi bi-journal-text me-1"></i>My Courses
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'upload' ? 'active' : ''}`} onClick={() => setActiveTab('upload')}>
            <i className="bi bi-cloud-upload-fill me-1"></i>Upload
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'learners' ? 'active' : ''}`} onClick={() => setActiveTab('learners')}>
            <i className="bi bi-people-fill me-1"></i>Learners
          </button>
        </li>
      </ul>

      {/* Content Section */}
      {renderContent()}
    </div>
  );
};

export default TutorDashboard;
