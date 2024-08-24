import React from 'react';
import '../styles/TimelineBox.css';

function TimelineBox({ year, content, image }) {
  return (
    <div className="timeline-box">
      <div className="year">{year}</div>
      <div className="content">{content}</div>
      {image && <img src={image} alt="timeline" />}
    </div>
  );
}

export default TimelineBox;
