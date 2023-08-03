import React from 'react';

// Buttons to start game and submit guess
const GameControls = ({game, submitGuess, startNewGame, endGame, getNextQuestion, gameOver}) => {
  let restartBtnColor = !gameOver ?'btn-light btd-light:hover':'btn-dark btd-dark:hover';
  return(
    <div id="game-controls" className="fixed bottom-0 left-0 z-10 h-16 w-screen p-3 pr-14 mb-8 
    flex space-x-2 md:w-auto md:order-2 md:static md:p-0 md:py-3 md:mb-0 md:h-auto">
      {game.currentRound > 0
        ? 
        <>
          <button type="button" className="btn btn-light btd-light:hover h-full w-full" onClick={endGame}>Settings</button>
          <button type="button" className={`btn ${restartBtnColor}h-full w-full`} onClick={startNewGame}>{!gameOver ? 'Restart' : 'Play again'}</button>
        </>
        : null
      }
      {game.currentRound > 0 && !gameOver ? (
        !game.currentRoundAnswered 
          ? <button type="button" className="btn btn-dark btd-dark:hover h-full w-full " onClick={submitGuess}>Submit guess</button> 
          : <button type="button" className="btn btn-dark btd-dark:hover h-full w-full " onClick={getNextQuestion}>Next round</button>
      ) : null }
    </div>
  );
};

export default GameControls;
