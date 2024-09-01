import React, { useState } from 'react';

function AdminManagement() {
  const [adminData, setAdminData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call to update username and password
    console.log('Admin details updated:', adminData);
  };

  return (
    <div className="admin-management">
      <h2>Admin Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="New Username"
          value={adminData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="New Password"
          value={adminData.password}
          onChange={handleChange}
        />
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
}

export default AdminManagement;
