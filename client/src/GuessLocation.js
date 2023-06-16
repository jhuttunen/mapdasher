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
  const [game, setGame] = useState({currentRound:0, totalScore:0});
  const [locations, setLocations] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [guessMarker, setGuessMarker] = useState(null);

  // Handle starting new game
  const startNewGame = () => {
    setLocations([]);
    setGuessMarker(null);
    setRounds([]);
    setGame({currentRound:1, totalScore:0});
    fetchAndSetLocation('newGame');
  };

  // Handle submitting guess
  const submitGuess = () => {
    const distance = calculateDistance(guessMarker, {'lat': locations[game.currentRound-1].lat, 'lon': locations[game.currentRound-1].lon});
    const score = calculateRoundScore(distance);
    const round = {
      number: game.currentRound,
      question: locations[game.currentRound-1],
      answer: guessMarker,
      distance: distance,
      score: score
    };
    setRounds((prevState) => [...prevState, round]);
    setGame((prevState) => ({
      ...prevState,
      currentRound: prevState.currentRound + 1, totalScore: prevState.totalScore+score
    }));
    setGuessMarker(null);
    fetchAndSetLocation(); // New round starts automatically atm
  };

  // Fetch random location from API
  const fetchAndSetLocation = async (newGame) => {
    let response = await (
      await fetch('http://localhost:4000/api/locations/1')
    ).json();
    let location = response[0];
    location.round = game.currentRound;
    // Overwrite previous locations if new game
    (newGame) ? setLocations([location]) : setLocations([...locations, location]);
  };

  // Calculate distance between answer and target location with haversine
  const calculateDistance = (loc1, loc2) => {
    return haversine(loc1, loc2, {format:'{lon,lat}'}).toFixed(0); 
  };

  // Calculate round score based on distance
  const calculateRoundScore = (distance) => {
    const score = (5000-distance);
    return  (score > 0) ? score : 0;
  };

  // Place and update guess marker location
  const LocationPicker = (props) => {
    const {currentRound, setGuessMarker, guessMarker} = props;
    useMapEvents({
      click(e) {
        if (currentRound > 0) {
          // wrap() restricts longitude to between 180 and -180
          const marker = { lat: e.latlng.lat, lon: e.latlng.wrap().lng };
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
    const {city, distance, number, score} = props;
    return(
      <tr>
        <td>{number}.</td>
        <td>{score}</td>
        <td>{distance}km</td>
        <td>{city}</td>
      </tr>
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
            <table> {/* Slice a copy to prevent mutations and reverse the array */ }
              <thead>
                <th>Rnd</th>
                <th>Score</th>
                <th>Distance</th>
                <th>Target location</th>
              </thead>
              {rounds.slice().reverse().map((round) => (
                <Guess 
                  key={round.answer.lat}
                  number={round.number}
                  city={round.question.city}
                  distance={round.distance}
                  score={round.score}
                />
              ))}
            </table>
          </div>
        )}
      </>
    );
  };

  const GuessesOnMap = (props) => {
    const {rounds, guessMarker} = props;
    return(
      <>
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
                  Distance {round.distance} km<br />
                  Score {round.score}
                </Tooltip>
              </Marker>
              <Polyline positions={[[round.question.lat, round.question.lon], [round.answer.lat, round.answer.lon]]} />
            </React.Fragment>
          ))
        )};
      </>
    );
  };

  // Buttons to start game and submit guess
  const GameControls = (props) => {
    const {currentRound, submitGuess, startNewGame} = props;
    return(
      <div>
        {currentRound > 0 &&
          <button onClick={submitGuess}>Submit guess</button>
        }
        <button onClick={startNewGame}>{currentRound < 1 ? 'Start new': 'Restart'} game</button>
      </div>
    );
  };

  // Display game total score
  const ScoreBoard = (props) => {
    const {totalScore} = props;
    return(
      <>
        <h2>Total score {totalScore}</h2>
      </>
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 400px', padding: '0 20px' }}>
        <ScoreBoard totalScore={game.totalScore} />
        <GameControls 
          currentRound={game.currentRound}
          submitGuess={submitGuess}
          startNewGame={startNewGame}
        />
        {game.currentRound > 0 && (
          <>
            <Question 
              currentRound={game.currentRound}
              locations={locations}
            />
            <GuessList 
              rounds={rounds}
              game={game} 
            />
            {/*{locations[0] && ( // List of locations for debugging purposes
              <div>
                <h2>Locations</h2>
                <ul>
                  {locations.map((loc, index) => (
                    <li key={loc.lat}>Location {index+1} ({loc.lat.toFixed(2)}, {loc.lon.toFixed(2)})</li>
                  ))}
                </ul>
              </div>
            )}
            {guessMarker && ( // GuessMarker location for debugging purposes
              <div>
                GuessMarker location: ({guessMarker.lat.toFixed(2)}, {guessMarker.lon.toFixed(2)})
              </div>
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
          worldCopyJump={true}
          style={{ width: '100%', height: '100vh' }}
        >
          {/*<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
          {/*<TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png" />*/}
          {/* <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png' />*/}
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png" />
          <LocationPicker 
            currentRound={game.currentRound}
            guessMarker={guessMarker}
            setGuessMarker={setGuessMarker}
          />
          <GuessesOnMap
            rounds={rounds}
            guessMarker={guessMarker}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default GuessLocation;