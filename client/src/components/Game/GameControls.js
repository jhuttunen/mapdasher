import React from 'react';

// Buttons to start game and submit guess
const GameControls = ({game, submitGuess, startNewGame, getNextQuestion}) => {
  return(
    <div id="game-controls" className="fixed bottom-0 left-0 h-16 w-screen p-3 col-span-1 grid grid-cols-3 space-x-2 pr-14 mb-8 md:w-auto md:order-2 md:static md:p-0 md:py-3 md:mx-3 md:mb-0 md:h-auto md:text-base">
      {game.currentRound > 0 ? (
        !game.currentRoundAnswered 
          ? <button type="button" className="btn btn-dark btd-dark:hover h-full col-span-2 md:h-auto" onClick={submitGuess}>Submit guess</button> 
          : <button type="button" className="btn btn-dark btd-dark:hover h-full col-span-2 md:h-auto" onClick={getNextQuestion}>Next round</button>
      ) : null }
      {game.currentRound < 1
        ? <button type="button" className="btn btn-dark btn-dark:hover h-full col-span-3 md:h-auto" onClick={startNewGame}>Start new game</button> 
        : <button type="button" className="btn btn-light btd-light:hover h-full col-span-1 md:h-auto" onClick={startNewGame}>Restart</button>
      }
    </div>
  );
};

export default GameControls;
