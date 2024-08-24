import React from 'react';

function Profile() {
  return (
    <div className="profile">
      <h1>Your Profile</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Tagline" />
        <input type="text" placeholder="Vanity URL" />
        {/* Other profile fields */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
