// components/loading_spinner/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  const spinnerStyle = {
    display: 'inline-block',
    width: '80px',
    height: '80px',
  };

  const spinnerCircleStyle = {
    display: 'block',
    width: '64px',
    height: '64px',
    margin: '8px',
    border: '8px solid #ccc',
    borderRadius: '50%',
    borderTop: '8px solid #000',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={spinnerStyle}>
      <div style={spinnerCircleStyle}></div>
    </div>
  );
};

export default LoadingSpinner;
