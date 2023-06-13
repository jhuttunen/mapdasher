import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Define default marker icon for Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const GuessLocation = () => {
  const [currentRound, setCurrentRound] = useState(0);
  const [locations, setLocations] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [guessMarker, setGuessMarker] = useState(null);

  // Handle starting new game
  const startNewGame = () => {
    fetchAndSetLocation();
    setCurrentRound(1);
    setGuessMarker(null);
    setGuesses([]);
  };

  // Handle submitting guess
  const submitGuess = () => {
    setGuesses((prevState) => [...prevState, guessMarker]); 
    setCurrentRound(prevState => prevState+1);
    setGuessMarker(null);
    fetchAndSetLocation(); // New round starts automatically atm
  };

  // Fetch random location from API
  const fetchAndSetLocation = async () => {
    let response = await (
      await fetch('http://localhost:4000/api/locations/1')
    ).json();
    setLocations([...locations, response[0]]);
  };

  // Place and update guess marker location
  const LocationPicker = (props) => {
    const {currentRound, setGuessMarker, guessMarker} = props;
    useMapEvents({
      click(e) {
        if (currentRound > 0) {
          const marker = { lat: e.latlng.lat, lon: e.latlng.lng };
          setGuessMarker(marker);
        }
      },
    });
    return guessMarker ? <Marker id="guess-marker" position={guessMarker} /> : null;
  };

  // Current round question 
  const Question = (props) => {
    const {currentRound, locations} = props;
    return (
      <>
        <h2>Round: {currentRound}</h2>
        {locations[currentRound-1] && (
          <p>
            Where on a map is <b>{locations[props.currentRound-1].city}</b>?
          </p>
        )}
      </>
    );
  };

  // Single guess
  const Guess = (props) => {
    const {index, guess} = props;
    return(
      <li key={index}>
        {index+1}: ({guess.lat.toFixed(2)}, {guess.lon.toFixed(2)})
      </li>
    );
  };

  // List of made guesses
  const GuessList = (props) => {
    const {guesses} = props;
    return(
      <>
        <h2>Previous guesses</h2>
        {guesses[0] && (
          <ul>
            {guesses.map((guess, index) => (
              <Guess 
                key={index}
                index={index} 
                guess={guess}
              />
            ))}
          </ul>
        )}
      </>
    );
  };

  // Buttons to start game and submit guess
  const GameControls = (props) => {
    const {currentRound, submitGuess, startNewGame} = props;
    return(
      <div style={{paddingTop:'20px'}}>
        {currentRound > 0
          ? <button onClick={submitGuess}>Submit guess</button>
          : <button onClick={startNewGame}>Start new game</button>
        }
      </div>
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 400px', padding: '0 20px' }}>
        <GameControls 
          currentRound={currentRound}
          submitGuess={submitGuess}
          startNewGame={startNewGame}
        />
        {currentRound > 0 && (
          <>
            <Question 
              currentRound={currentRound}
              locations={locations}
            />
            <GuessList 
              guesses={guesses} 
            />
            {/*{locations[0] && ( // List of locations for debugging purposes
              <ul>
                  <h2>Locations</h2>
                {locations.map((loc, index) => (
                    <li key={index}>Location {index+1} ({loc.lat.toFixed(2)}, {loc.lon.toFixed(2)})</li>
                ))}
              </ul>
            )}*/}
          </>
        )}
      </div>
      <div style={{ flex: '1' }}>
        <MapContainer 
          center={[0,0]} 
          zoom={2} 
          scrollWheelZoom={true} 
          zoomSnap={0.1}
          style={{ width: '100%', height: '100vh' }}
        >
          {/*<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
          {/*<TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png" />*/}
          {/* <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png' />*/}
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png" />
          <LocationPicker 
            currentRound={currentRound}
            guessMarker={guessMarker}
            setGuessMarker={setGuessMarker}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default GuessLocation;