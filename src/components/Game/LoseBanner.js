import React from 'react';

const LoseBanner = ({ correctAnswer, resetGame }) => {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
      <a href="#" onClick={resetGame}>Play Again</a>
    </div>
  );
};

export default LoseBanner;