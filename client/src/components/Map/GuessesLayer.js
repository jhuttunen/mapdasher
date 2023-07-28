import React from 'react';
import { Marker, Polyline, Tooltip } from 'react-leaflet';

const GuessesLayer = ({rounds}) => {
  // Last guess only
  const lastRound = rounds.slice(-1);
  return(
    <>
      {rounds[0] ? ( 
        lastRound.map((round, index) => (
          <React.Fragment key={index}>
            <Marker position={[round.question.lat, round.question.lng]}>
              <Tooltip className="tooltip" permanent>
                <span className="inline-flex">
                  <span className="text-left truncate max-w-[13rem]">
                    {round.question.city_name},<br /> {round.question.country}
                  </span>
                  <img 
                    src={`https://flagcdn.com/24x18/${round.question.iso2.toLowerCase()}.png`} 
                    className="ml-1 self-center"
                    width="24"
                    height="18"
                    title={round.question.country}
                    alt={round.question.country}
                  />
                </span>
              </Tooltip>
            </Marker>
            <Marker position={[round.answer.lat, round.answer.lng]}>
              <Tooltip permanent>
                <b>Round {round.number}</b><br />
                Score {round.score}<br />
                Distance {round.distance} km
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