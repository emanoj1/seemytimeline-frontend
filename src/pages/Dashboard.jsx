import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="dashboard">
      <h1>Your Dashboard</h1>
      {/* Links to Profile, Timeline, Change Password */}
    </div>
  );
}

export default Dashboard;

