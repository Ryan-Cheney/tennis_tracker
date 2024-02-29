import React from 'react';

function ServeStats({ serves }) {
    // Example stats calculation
    const inServes = serves.filter(serve => serve === 'IN').length;
    const outServes = serves.filter(serve => serve === 'OUT').length;
    const totalServes = serves.length;
    const successRate = totalServes > 0 ? (inServes / totalServes * 100).toFixed(2) : 0;
  

  return (
    <div>
      <h2>Serve Statistics</h2>
      <p>Total Serves: {totalServes}</p>
      <p>Serves In: {inServes}</p>
      <p>Serves Out: {outServes}</p>
      <p>Success Rate: {successRate}%</p>
    </div>
  );
}

export default ServeStats;
