import React from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

// Place and update guess marker location
const LocationPicker = ({setGuessMarker, guessMarker, pickerEnabled}) => {
  useMapEvents({
    click(e) {
      if (pickerEnabled) {
        // wrap() restricts longitude to between 180 and -180
        const coordinates = { lat: e.latlng.lat, lng: e.latlng.wrap().lng };
        setGuessMarker(coordinates);
      }
    },
  });
  return guessMarker ? <Marker id="guess-marker" position={guessMarker} /> : null;
};

export default LocationPicker;
