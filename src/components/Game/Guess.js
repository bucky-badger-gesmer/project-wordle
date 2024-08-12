import React from 'react';
import '../../styles.css';
import { checkGuess } from '../../game-helpers';

const Guess = ({ guess, answer }) => {
  const checkedGuess = checkGuess(guess, answer);

  if (guess !== undefined) {
    return (
      <p key={Math.random()} className="guess">
        <span className={
          `cell ${checkedGuess[0].status === 'incorrect' && 'incorrect'} ${checkedGuess[0].status === 'misplaced' && 'misplaced'} ${checkedGuess[0].status === 'correct' && 'correct'}`
        }>{guess[0]}</span>
        <span className={
          `cell ${checkedGuess[1].status === 'incorrect' && 'incorrect'} ${checkedGuess[1].status === 'misplaced' && 'misplaced'} ${checkedGuess[1].status === 'correct' && 'correct'}`
        }>{guess[1]}</span>
        <span className={
          `cell ${checkedGuess[2].status === 'incorrect' && 'incorrect'} ${checkedGuess[2].status === 'misplaced' && 'misplaced'} ${checkedGuess[2].status === 'correct' && 'correct'}`
        }>{guess[2]}</span>
        <span className={
          `cell ${checkedGuess[3].status === 'incorrect' && 'incorrect'} ${checkedGuess[3].status === 'misplaced' && 'misplaced'} ${checkedGuess[3].status === 'correct' && 'correct'}`
        }>{guess[3]}</span>
        <span className={
          `cell ${checkedGuess[4].status === 'incorrect' && 'incorrect'} ${checkedGuess[4].status === 'misplaced' && 'misplaced'} ${checkedGuess[4].status === 'correct' && 'correct'}`
        }>{guess[4]}</span>
      </p>
    );
  }

  return (
    <p key={Math.random()} className="guess">
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
      <span className="cell"></span>
    </p>
  );
};

export default Guess;