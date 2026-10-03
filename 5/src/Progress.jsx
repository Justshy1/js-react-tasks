import React from 'react';

// BEGIN (write your solution here)
const Progress = ({ percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="progressbar"
        style={barStyle}
      ></div>
    </div>
  );
};

export default Progress;
// END
