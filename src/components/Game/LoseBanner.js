import React from 'react';

const LoseBanner = ({ correctAnswer }) => {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
    </div>
  );
};

export default LoseBanner;