import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Profile.css';

function Profile() {
  const [formData, setFormData] = useState({
    displayName: '',
    tagline: '',
    vanityUrl: '',
    socialLinks: {
      instagram: '',
      facebook: '',
      twitter: '',
      pinterest: '',
      snapchat: '',
      tiktok: '',
      linkedin: '',
      behance: '',
      youtube: '',
      vimeo: '',
      reddit: '',
    },
    webLinks: ['', '', ''],
    profilePicture: null,
  });

  const [vanityUrlMessage, setVanityUrlMessage] = useState('');
  const [isVanityUrlAvailable, setIsVanityUrlAvailable] = useState(false);

  useEffect(() => {
    // Load the existing user profile data from the server
    async function loadUserProfile() {
      try {
        const response = await axios.get('/api/users/profile');
        setFormData(response.data);
      } catch (error) {
        console.error('Error loading user profile:', error.response?.data || error.message);
      }
    }
    loadUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('social_')) {
      const socialPlatform = name.split('_')[1];
      setFormData({
        ...formData,
        socialLinks: {
          ...formData.socialLinks,
          [socialPlatform]: value,
        },
      });
    } else if (name.startsWith('webLink_')) {
      const index = parseInt(name.split('_')[1], 10);
      const newWebLinks = [...formData.webLinks];
      newWebLinks[index] = value;
      setFormData({
        ...formData,
        webLinks: newWebLinks,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const checkVanityUrlAvailability = async () => {
    try {
      const response = await axios.post('/api/users/check-vanity-url', { vanityUrl: formData.vanityUrl });
      if (response.data.available) {
        setVanityUrlMessage('Woohoo! That vanity URL name is available!');
        setIsVanityUrlAvailable(true);
      } else {
        setVanityUrlMessage('Oops! That vanity URL name is not available. Try another name...');
        setIsVanityUrlAvailable(false);
      }
    } catch (error) {
      console.error('Error checking vanity URL availability:', error.response?.data || error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataCopy = { ...formData };

      // If profilePicture is an object (File), upload it separately and save the URL
      if (formData.profilePicture instanceof File) {
        const imageData = new FormData();
        imageData.append('file', formData.profilePicture);

        const imageResponse = await axios.post('/api/users/upload-profile-picture', imageData);
        formDataCopy.profilePicture = imageResponse.data.url;
      }

      // Use PUT request for updating the profile
      await axios.put('/api/users/profile', formDataCopy);
      console.log('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error.response?.data || error.message);
    }
  };

  return (
    <div className="profile">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-picture">
          <label htmlFor="profilePicture">Profile Picture:</label>
          {formData.profilePicture && (
            <div>
              <img
                src={
                  formData.profilePicture instanceof File
                    ? URL.createObjectURL(formData.profilePicture)
                    : formData.profilePicture
                }
                alt="Profile"
                className="profile-picture-preview"
              />
            </div>
          )}
          <input type="file" id="profilePicture" onChange={handleFileChange} />
        </div>

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

        <div className="vanity-url-section">
          <input
            type="text"
            name="vanityUrl"
            placeholder="Vanity URL"
            value={formData.vanityUrl}
            onChange={handleChange}
            onBlur={checkVanityUrlAvailability}
          />
          {vanityUrlMessage && (
            <p className={isVanityUrlAvailable ? 'success' : 'error'}>{vanityUrlMessage}</p>
          )}
        </div>

        <h3>Social Links</h3>
        {Object.keys(formData.socialLinks).map((platform) => (
          <input
            key={platform}
            type="text"
            name={`social_${platform}`}
            placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} URL`}
            value={formData.socialLinks[platform]}
            onChange={handleChange}
          />
        ))}

        <h3>Web Links</h3>
        {formData.webLinks.map((link, index) => (
          <input
            key={index}
            type="text"
            name={`webLink_${index}`}
            placeholder={`Website ${index + 1}`}
            value={link}
            onChange={handleChange}
          />
        ))}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;

