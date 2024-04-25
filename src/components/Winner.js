// Winner.js
import React from 'react';

const Winner = ({ winner }) => {
  return (
    <div className="winner">
      <h2>Winner:</h2>
      <p>{winner}</p>
    </div>
  );
};

export default Winner;
