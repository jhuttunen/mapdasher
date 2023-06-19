import React from 'react';

// Buttons to start game and submit guess
const GameControls = ({game, submitGuess, startNewGame, getNextQuestion}) => {
  return(
    <div id="game-controls" className="space-x-2 py-2">
      {game.currentRound > 0 ? (
        !game.currentRoundAnswered 
          ? <button className="btn btn-dark btd-dark:hover" onClick={submitGuess}>Submit guess</button> 
          : <button className="btn btn-dark btd-dark:hover" onClick={getNextQuestion}>Next round</button>
      ) : null }
      {game.currentRound < 1
        ? <button className="btn btn-dark btn-dark:hover" onClick={startNewGame}>Start new game</button> 
        : <button className="btn btn-light btd-light:hover" onClick={startNewGame}>Restart game</button>
      }
    </div>
  );
};

export default GameControls;
