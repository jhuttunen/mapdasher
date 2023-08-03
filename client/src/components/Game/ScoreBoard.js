import React from 'react';
import ProgressBar from '../Elements/ProgressBar/ProgressBar';

// Display current game round total score
const ScoreBoard = ({totalScore, currentRound, rounds, timeLeft, timer}) => {
  return(
    <div id="score-board" className="col-span-2 grid grid-cols-2 ml-1 gap-x-3 p-2 text-sm justify-items-start md:grid-cols-5 md:p-0 md:text-xl">
      {timer ? 
        <>
          <div className="col-span-2 md:col-span-5 w-full h-4">
            <ProgressBar percentage={((timeLeft/timer)*100).toFixed(2)} />
          </div>
          <div className="md:col-span-2">Timer</div><div className="md:col-span-3">{timeLeft} s</div>
        </> : null}
      <div className="md:col-span-2">Round</div><div className="md:col-span-3">{currentRound}{`${(rounds) ? '/' + rounds : ''}`}</div>
      <div className="md:col-span-2">Score</div><div className="md:col-span-3">{totalScore}</div>
    </div>
  );
};

export default ScoreBoard;