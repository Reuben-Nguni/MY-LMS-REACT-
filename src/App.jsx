// src/App.js
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useAuth } from './context/AuthContext.jsx'; // optional if needed in layout


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import ProtectedRoute from './ProtectedRoute';
import TutorDashboard from './Components/Dashboard/TutorDashboard';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import AdminPanel from './Components/AdminPanel';
import Home from './Components/Home'; // Corrected path (removed extra slash)
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import Search from './Components/Search'; // Importing Search component

const App = () => {
    const user = { username: 'JohnDoe' };

    return (
        <Router>
            <NavBar />
            
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/dashboard" element={
                        <ProtectedRoute role="learner">
                        <Dashboard />
                        </ProtectedRoute>
                    } />

                    <Route path="/tutor" element={
                        <ProtectedRoute role="tutor">
                        <TutorDashboard />
                        </ProtectedRoute>
                    } />

                    <Route path="/admin" element={
                        <ProtectedRoute role="admin">
                        <AdminPanel />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<div>404 Not Found</div>} />
                    </Routes>
            <Footer />
        </Router>
    );
};

export default App;
