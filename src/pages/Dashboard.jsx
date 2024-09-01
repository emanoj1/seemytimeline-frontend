import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';
import '../styles/Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <div className="card-container">
        <div className="card" onClick={() => navigate('/profile')}>
          <h2>Profile</h2>
          <p>Manage your personal info</p>
        </div>
        <div className="card" onClick={() => navigate('/timeline')}>
          <h2>Timeline</h2>
          <p>Manage your life events</p>
        </div>
        <div className="card" onClick={() => navigate('/statistics')}>
          <h2>Statistics</h2>
          <p>View your stats</p>
        </div>
        <div className="card" onClick={() => navigate('/admin-management')}>
          <h2>Admin Management</h2>
          <p>Change your username and password</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

