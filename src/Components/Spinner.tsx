import React from 'react';

export function Spinner(){
  const spinnerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  };

  const circleStyle: React.CSSProperties = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTopColor: '#3498db',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    animation: 'spin 1s ease-in-out infinite',
  };

  const keyframesStyle = `
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={spinnerStyle}>
      <style>{keyframesStyle}</style>
      <div style={circleStyle}></div>
    </div>
  );
}
