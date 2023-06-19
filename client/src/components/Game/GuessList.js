import React from 'react';

// List of made guesses
const GuessList = ({rounds}) => {
  return(
    <>
      {rounds[0] ? (
        <>
          <h2>Previous rounds</h2>
          <div  className="flex grow">
            <table id="guess-list" className="grow bg-slate-100 border border-spacing-1">
              <thead className="bg-slate-200">
                <tr className="space-x-2 text-right">
                  <th>Rnd</th>
                  <th>Score</th>
                  <th>Distance</th>
                  <th className="text-left pl-5"colSpan={2}>Target location</th>
                </tr>
              </thead>
              <tbody className="bg-slate-100">
                {rounds.slice().reverse().map((round) => (
                  <tr key={round.lat} className="space-x-2 text-right">
                    <td>{round.number}.</td>
                    <td>{round.score}</td>
                    <td>{round.distance} km</td>
                    <td className="text-left pl-5">{round.question.city}</td>
                    <td><img src={`https://flagsapi.com/${round.question.iso2}/shiny/24.png`} title={round.question.country}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null }
    </>
  );
};

export default GuessList;