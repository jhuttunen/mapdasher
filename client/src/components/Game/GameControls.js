import React from 'react';

// Buttons to start game and submit guess
const GameControls = ({game, submitGuess, startNewGame, getNextQuestion}) => {
  return(
    <div id="game-controls">
      {game.currentRound > 0 ? (
        !game.currentRoundAnswered 
          ? <button onClick={submitGuess}>Submit guess</button> 
          : <button onClick={getNextQuestion}>Next round</button>
      ) : null }
      {game.currentRound < 1
        ? <button onClick={startNewGame}>Start new game</button> 
        : <button onClick={startNewGame}>Restart game</button>
      }
    </div>
  );
};

export default GameControls;
