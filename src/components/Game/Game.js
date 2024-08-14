import React from 'react';

import '../../styles.css';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from './GuessResults';
import WinBanner from './WinBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import LoseBanner from './LoseBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [currentAnswer, setCurrentAnswer] = React.useState(answer);
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  const resetGame = () => {
    const nextCurrentAnswer = sample(WORDS);
    setCurrentAnswer(nextCurrentAnswer);

    setGuesses([]);
    setGameOver(false);
  };

  const renderWin = () => {
    if (guesses[guesses.length - 1] === currentAnswer) {
      return (
        <WinBanner numGuesses={guesses.length} resetGame={resetGame} />
      );
    };
  };

  const renderLose = () => {
    if (guesses.length === NUM_OF_GUESSES_ALLOWED && guesses[guesses.length - 1] !== currentAnswer) {
      return (
        <LoseBanner correctAnswer={currentAnswer} resetGame={resetGame} />
      );
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={currentAnswer} />
      <form className="guess-input-wrapper" onSubmit={(e) => {
        e.preventDefault();
        console.info({ guess });
        const nextGuesses = [...guesses, guess];
        setGuesses(nextGuesses);
        setGuess('');

        if ((guess === currentAnswer) || (nextGuesses.length === NUM_OF_GUESSES_ALLOWED && nextGuesses[nextGuesses.length - 1] !== currentAnswer)) {
          setGameOver(true);
        }
      }}>
        <label htmlFor="guess-input">Enter guess:</label>
        {renderWin()}
        {renderLose()}
        <input
          id="guess-input"
          disabled={gameOver}
          type="text"
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          value={guess}
          onChange={(e) => {
            setGuess(String(e.target.value).toUpperCase());
          }} />
      </form>
    </>
  );
}

export default Game;
