import React from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

// Place and update guess marker location
const LocationPicker = ({currentRound, setGuessMarker, guessMarker}) => {
  useMapEvents({
    click(e) {
      if (currentRound > 0) {
        // wrap() restricts longitude to between 180 and -180
        const coordinates = { lat: e.latlng.lat, lng: e.latlng.wrap().lng };
        setGuessMarker(coordinates);
      }
    },
  });
  return guessMarker ? <Marker id="guess-marker" position={guessMarker} /> : null;
};

export default LocationPicker;
