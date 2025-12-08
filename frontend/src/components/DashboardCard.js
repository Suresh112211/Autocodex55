import React from 'react';

// This component accepts 'title' and 'value' as properties (props)
const DashboardCard = ({ title, value }) => {
  return (
    <div className="dashboard-card">
      <h4>{title}</h4>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default DashboardCard;
