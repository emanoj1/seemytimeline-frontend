import React, { useState } from 'react';
import '../styles/Profile.css';

function Profile() {
  const [formData, setFormData] = useState({
    displayName: '',
    tagline: '',
    vanityUrl: '',
    socialLinks: '',
    webLinks: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call to update profile info
    console.log('Profile updated:', formData);
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          value={formData.displayName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tagline"
          placeholder="Tagline"
          value={formData.tagline}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vanityUrl"
          placeholder="Vanity URL"
          value={formData.vanityUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="socialLinks"
          placeholder="Social Media Links"
          value={formData.socialLinks}
          onChange={handleChange}
        />
        <input
          type="text"
          name="webLinks"
          placeholder="Web Links"
          value={formData.webLinks}
          onChange={handleChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;

