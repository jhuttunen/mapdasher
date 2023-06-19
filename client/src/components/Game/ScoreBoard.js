import React from 'react';

// Display current game round total score
const ScoreBoard = ({totalScore, currentRound}) => {
  return(
    <div id="score-board">
      <h2>
        Round {currentRound}<br />
        Total score {totalScore}
      </h2>
    </div>
  );
};

export default ScoreBoard;