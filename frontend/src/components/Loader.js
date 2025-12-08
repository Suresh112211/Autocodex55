import React from 'react';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
      <p>Loading data...</p>
    </div>
  );
};

export default Loader;
