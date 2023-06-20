import React from 'react';

// Buttons to start game and submit guess
const GameControls = ({game, submitGuess, startNewGame, getNextQuestion}) => {
  return(
    <div id="game-controls" className="col-span-1 grid grid-cols-2 text-sm order-last grow space-x-1 md:grow-0 md:order-2 md:space-x-2 md:py-3 md:mx-3 md:h-auto md:text-base">
      {game.currentRound > 0 ? (
        !game.currentRoundAnswered 
          ? <button type="button" className="btn btn-dark btd-dark:hover md:h-auto" onClick={submitGuess}>Submit guess</button> 
          : <button type="button" className="btn btn-dark btd-dark:hover md:h-auto" onClick={getNextQuestion}>Next round</button>
      ) : null }
      {game.currentRound < 1
        ? <button type="button" className="btn btn-dark btn-dark:hover my-3 w-full col-span-2" onClick={startNewGame}>Start new game</button> 
        : <button type="button" className="btn btn-light btd-light:hover md:h-auto" onClick={startNewGame}>Restart</button>
      }
    </div>
  );
};

export default GameControls;
