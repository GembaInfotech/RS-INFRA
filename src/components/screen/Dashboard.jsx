import React from 'react';

const Dashboard = ({ card }) => {
  return (
    <div className="flex-1 overflow-hidden">
      <iframe 
        src={card.link}
        title={card.title}
        style={{ width: '100%', height: 'calc(100vh)', border: 'none' }}
        className="responsive-iframe"
      />
    </div>
  );
};

export default Dashboard;
