import React, { useEffect, useState } from 'react';

function Statistics() {
  const [stats, setStats] = useState({
    followers: 0,
    visits: 0,
    following: 0,
    likes: 0,
  });

  useEffect(() => {
    // Implement API call to fetch statistics
    // Example:
    // setStats({
    //   followers: 120,
    //   visits: 450,
    //   following: 78,
    //   likes: 300,
    // });
    console.log('Fetch statistics from API');
  }, []);

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <ul>
        <li>Followers: {stats.followers}</li>
        <li>Visits: {stats.visits}</li>
        <li>Following: {stats.following}</li>
        <li>Likes: {stats.likes}</li>
      </ul>
    </div>
  );
}

export default Statistics;
