import React, { useState } from 'react';
import haversine from 'haversine';
import { 
  MapContainer, 
  Marker,
  Polyline, 
  Popup,
  TileLayer, 
  Tooltip,
  useMapEvents 
} from 'react-leaflet';
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
  const [rounds, setRounds] = useState([]);
  const [guessMarker, setGuessMarker] = useState(null);

  // Handle starting new game
  const startNewGame = () => {
    setCurrentRound(1);
    fetchAndSetLocation();
    setGuessMarker(null);
    setRounds([]);
  };

  // Handle submitting guess
  const submitGuess = () => {
    const round = {};
    round.question = locations[currentRound-1];
    round.answer = guessMarker;
    round.number = currentRound;
    const distance = calculateDistance(round.answer, {'lat': locations[currentRound-1].lat, 'lon': locations[currentRound-1].lon});
    round.distance = distance.toFixed(0);
    setRounds((prevState) => [...prevState, round]);
    setCurrentRound(prevState => prevState+1);
    setGuessMarker(null);
    fetchAndSetLocation(); // New round starts automatically atm
  };

  // Fetch random location from API
  const fetchAndSetLocation = async () => {
    let response = await (
      await fetch('http://localhost:4000/api/locations/1')
    ).json();
    let location = response[0];
    location.round = currentRound;
    setLocations([...locations, location]);
  };

  // Calculate distance between answer and target location with haversine
  const calculateDistance = (loc1, loc2) => {
    return haversine(loc1, loc2, {format:'{lon,lat}'}); 
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
        <h2>Question {currentRound}</h2>
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
    const {coordinates, city, country, distance, number} = props;
    return(
      <li key={coordinates}>
        {number}: ({coordinates[0]}, {coordinates[1]}) was <b>{distance}</b> km from <b>{city}</b>, {country}
      </li>
    );
  };

  // List of made guesses
  const GuessList = (props) => {
    const {rounds} = props;
    return(
      <>
        {rounds[0] && (
          <div>
            <h2>Previous guesses</h2>
            <ul> {/* Slice a copy to prevent mutations and reverse the array */ }
              {rounds.slice().reverse().map((round, index) => (
                <Guess 
                  key={index}
                  number={round.number}
                  coordinates={[round.answer.lat.toFixed(2), round.answer.lon.toFixed(2)]}
                  city={round.question.city}
                  country={round.question.country}
                  distance={round.distance}
                />
              ))}
            </ul>
          </div>
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
              rounds={rounds} 
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
          {rounds[0] && !guessMarker && ( // Show results on map when guessMarker not active
            rounds.map((round, index) => (
              <React.Fragment key={index}>
                <Marker position={[round.question.lat, round.question.lon]}>
                  <Popup>
                    Location {round.number}<br />
                    {round.question.city}, {round.question.country}
                  </Popup>
                </Marker>
                <Marker position={[round.answer.lat, round.answer.lon]}>
                  <Tooltip permanent>
                    Guess {round.number}<br />
                    <b>{round.distance} km</b> away
                  </Tooltip>
                </Marker>
                <Polyline positions={[[round.question.lat, round.question.lon], [round.answer.lat, round.answer.lon]]} />
              </React.Fragment>
            ))
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default GuessLocation;