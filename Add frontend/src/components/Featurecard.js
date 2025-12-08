import React from 'react';

// This component accepts 'title' and 'description' as properties (props)
const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <div className="card-icon">{/* Icon placeholder */}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn-secondary">Learn More</button>
    </div>
  );
};

export default FeatureCard;
