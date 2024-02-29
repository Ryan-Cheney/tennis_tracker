import React from 'react';

function ServeList({ serves }) {
  return (
    <div>
      {serves.map((serve, index) => (
        <div key={index}>{serve}</div>
      ))}
    </div>
  );
}

export default ServeList;
