import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, tagline, vanityUrl, profileImage, followers, following }) {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2>{name}</h2>
      <p>@{vanityUrl}</p>
      <p>{tagline}</p>
      <div className="social-stats">
        <span>{followers} Followers</span>
        <span>{following} Following</span>
      </div>
    </div>
  );
}

export default ProfileCard;
