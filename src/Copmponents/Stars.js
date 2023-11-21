
import React from 'react';

const Stars = ({ rating }) => {
  const starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starArray.push(<span key={i}>&#9733;</span>); 
    } else {
      starArray.push(<span key={i}>&#9734;</span>); 
    }
  }
  return <div>{starArray}</div>;
};

export default Stars;
