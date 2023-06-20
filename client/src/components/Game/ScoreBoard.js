import React from 'react';

// Display current game round total score
const ScoreBoard = ({totalScore, currentRound}) => {
  return(
    <div id="score-board" className="col-span-1 grid grid-cols-2 grid-rows-2 gap-x-3 text-sm mt-2 justify-items-start md:grid-cols-3 md:mx-3 md:text-xl">
      <div className="md:col-span-1">Round</div><div className="md:col-span-2">{currentRound}</div>
      <div className="md:col-span-1">Score</div><div className="md:col-span-2">{totalScore}</div>
    </div>
  );
};

export default ScoreBoard;