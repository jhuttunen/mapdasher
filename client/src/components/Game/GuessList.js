import React from 'react';

// List of made guesses
const GuessList = ({rounds}) => {
  return(
    <>
      {rounds[0] ? (
        <div id="guess-list">
          <h2>Previous rounds</h2>
          <table>
            <thead>
              <tr>
                <th>Rnd</th>
                <th>Score</th>
                <th>Distance</th>
                <th colSpan={2}>Target location</th>
              </tr>
            </thead>
            <tbody>
              {rounds.slice().reverse().map((round) => (
                <tr key={round.lat}>
                  <td>{round.number}.</td>
                  <td>{round.score}</td>
                  <td>{round.distance} km</td>
                  <td>{round.question.city}</td>
                  <td><img src={`https://flagsapi.com/${round.question.iso2}/shiny/24.png`} title={round.question.country}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null }
    </>
  );
};

export default GuessList;