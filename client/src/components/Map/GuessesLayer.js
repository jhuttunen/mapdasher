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
            <Marker position={[round.question.lat, round.question.lon]}>
              <Tooltip className="tooltip" permanent>
                <span className="inline-flex">
                  <span className="text-left truncate max-w-[13rem]">
                    {round.question.city},<br /> {round.question.country}
                  </span>
                  <img 
                    src={`https://flagsapi.com/${round.question.iso2}/shiny/32.png`} 
                    className="ml-1 self-center"
                    title={round.question.country}
                  />
                </span>
              </Tooltip>
            </Marker>
            <Marker position={[round.answer.lat, round.answer.lon]}>
              <Tooltip permanent>
                <b>Round {round.number}</b><br />
                Score {round.score}<br />
                Distance {round.distance} km
              </Tooltip>
            </Marker>
            <Polyline positions={[[round.question.lat, round.question.lon], [round.answer.lat, round.answer.lon]]} />
          </React.Fragment>
        ))
      ) : null };
    </>
  );
};

export default GuessesLayer;