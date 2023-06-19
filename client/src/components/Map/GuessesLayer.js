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
              <Tooltip permanent>
                <span style={{ display:'inline-flex', alignItems: 'center'}}>
                  <span>{round.question.city}, {round.question.country}</span>
                  <img 
                    src={`https://flagsapi.com/${round.question.iso2}/shiny/24.png`} 
                    style={{marginLeft:'5px'}}
                    title={round.question.country}
                  />
                </span>
              </Tooltip>
            </Marker>
            <Marker position={[round.answer.lat, round.answer.lon]}>
              <Tooltip permanent>
                Round {round.number}<br />
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