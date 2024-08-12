import React from 'react';
import '../../styles.css';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from './Guess';

const GuessResults = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
        return (
          <Guess guess={guesses[num]} key={Math.random()} answer={answer} />
        );
      })}
    </div>
  );
};

export default GuessResults;