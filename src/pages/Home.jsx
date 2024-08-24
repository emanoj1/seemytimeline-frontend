import React from 'react';

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to SeeMyTimeline</h1>
        <p>Your life, your story, beautifully displayed.</p>
        <button>Sign Up</button>
      </div>
      <div className="user-previews">
        {/* Display circular cards for current users */}
      </div>
    </div>
  );
}

export default Home;
