import React from 'react';
import { CircleMarker, Marker, Polyline, Tooltip } from 'react-leaflet';

const GuessesLayer = ({rounds, gameOver}) => {
  // Last guess only
  const guesses = (gameOver) ? rounds : rounds.slice(-1);
  return(
    <>
      {rounds[0] ? ( 
        guesses.map((round, index) => (
          <React.Fragment key={index}>
            <CircleMarker
              center={[round.question.lat, round.question.lng]}
              pathOptions={{ color: 'green' }}
              radius={10}>
              <Tooltip className="tooltip" permanent>
                <span className="inline-flex">
                  <span className="text-left truncate max-w-[13rem]">
                    <b>Round {round.number}</b><br />
                    {round.question.city_name}, {round.question.country}<br />
                    Score {round.score}<br />
                    Distance {round.distance} km<br />
                  </span>
                  <img 
                    src={`https://flagcdn.com/24x18/${round.question.iso2.toLowerCase()}.png`} 
                    className="ml-1 align-top self-start"
                    width="24"
                    height="18"
                    title={round.question.country}
                    alt={round.question.country}
                  />
                </span>
              </Tooltip>
            </CircleMarker>
            <Marker position={[round.answer.lat, round.answer.lng]}>
              <Tooltip>
                <b>Guess {round.number}</b>
              </Tooltip>
            </Marker>
            <Polyline positions={[[round.question.lat, round.question.lng], [round.answer.lat, round.answer.lng]]} />
          </React.Fragment>
        ))
      ) : null };
    </>
  );
};

export default GuessesLayer;