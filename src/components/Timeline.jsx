import React, { useState } from 'react';

function Timeline() {
  const [timelineData, setTimelineData] = useState({
    year: '',
    image: '',
    post: '',
  });

  const handleChange = (e) => {
    setTimelineData({
      ...timelineData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setTimelineData({
      ...timelineData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement API call to update timeline info
    console.log('Timeline updated:', timelineData);
  };

  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={timelineData.year}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
        />
        <textarea
          name="post"
          placeholder="Your Post"
          value={timelineData.post}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add to Timeline</button>
      </form>
    </div>
  );
}

export default Timeline;
