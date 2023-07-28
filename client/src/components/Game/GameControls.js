import React from 'react';

// Buttons to start game and submit guess
const GameControls = ({game, submitGuess, startNewGame, endGame, getNextQuestion}) => {
  return(
    <div id="game-controls" className="fixed bottom-0 left-0 z-10 h-16 w-screen p-3 col-span-1 grid grid-cols-4 space-x-2 pr-14 mb-8 md:w-auto md:order-2 md:static md:p-0 md:py-3 md:mx-3 md:mb-0 md:h-auto md:text-base">
      {game.currentRound > 0 ? (
        !game.currentRoundAnswered 
          ? <button type="button" className="btn btn-dark btd-dark:hover h-full col-span-2 md:h-auto" onClick={submitGuess}>Submit guess</button> 
          : <button type="button" className="btn btn-dark btd-dark:hover h-full col-span-2 md:h-auto" onClick={getNextQuestion}>Next round</button>
      ) : null }
      {game.currentRound > 0
        ? 
        <>
          <button type="button" className="btn btn-light btd-light:hover h-full col-span-1 md:h-auto" onClick={startNewGame}>Restart</button>
          <button type="button" className="btn btn-light btd-light:hover h-full col-span-1 md:h-auto" onClick={endGame}>End</button>
        </>
        : null
      }
    </div>
  );
};

export default GameControls;
