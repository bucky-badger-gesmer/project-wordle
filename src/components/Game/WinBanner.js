import React from 'react';
import '../../styles.css';

const WinBanner = ({ numGuesses, resetGame }) => {
  return (
    <div className="happy banner">
      <p>
      <strong>Congratulations!</strong> Got it in{' '}
      <strong>{numGuesses} guesses</strong>.
      </p>
      <a href="#" onClick={resetGame}>Play Again</a>
    </div>
  );
};

export default WinBanner;