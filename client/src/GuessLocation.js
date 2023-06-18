import React, { useState, useRef } from 'react';
import haversine from 'haversine';
import { 
  MapContainer, 
  Marker,
  Polyline, 
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
  const mapRef = useRef(null);
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

  // Get new question
  const getNextQuestion = () => {
    setGame((prevState) => ({
      ...prevState,
      currentRound: prevState.currentRound + 1, currentRoundAnswered: false
    }));
    fetchAndSetLocation();
    resetMapZoom();
    setGuessMarker(null);
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
    zoomToGuess(round); // Zoom to guess location and fit map bounds
    setRounds((prevState) => [...prevState, round]);
    setGame((prevState) => ({
      ...prevState,
      totalScore: prevState.totalScore+score, currentRoundAnswered: true
    }));
    setGuessMarker(null);
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

  // Reset map zoom to world
  const resetMapZoom = () => {
    if(mapRef.current){
      mapRef.current.fitWorld();
    }
  };

  // Zoom to submitted guess and fit map bounds accordingly
  const zoomToGuess = (lastRound) => {
    if(lastRound.answer && lastRound.question){
      const bounds = [[lastRound.answer.lat, lastRound.answer.lon], [lastRound.question.lat, lastRound.question.lon]];
      if(mapRef.current){
        mapRef.current.fitBounds(bounds, {padding: [300, 300]});
      }
    }
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
      <div>
        <h2>Your quest is</h2>
        {locations[currentRound-1] && (
          <span style={{ display:'inline-flex', alignItems: 'center', lineHeight:'24px'}}>
            <span>... to dash around map to <b>{locations[props.currentRound-1].city}</b></span>
            <img 
              src={`https://flagsapi.com/${locations[props.currentRound-1].iso2}/shiny/24.png`} 
              style={{marginLeft:'5px'}}
            />
          </span>
        )}
      </div>
    );
  };

  // Single guess
  const Guess = (props) => {
    const {city, country, iso2, distance, number, score} = props;
    return(
      <tr>
        <td>{number}.</td>
        <td>{score}</td>
        <td>{distance}km</td>
        <td>{city}</td>
        <td><img src={`https://flagsapi.com/${iso2}/shiny/24.png`} title={country}/></td>
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
            <h2>Previous rounds</h2>
            <table>
              <thead>
                <tr>
                  <td>Rnd</td>
                  <td>Score</td>
                  <td>Distance</td>
                  <td colSpan={2}>Target location</td>
                </tr>
              </thead>
              <tbody>
                {rounds.slice().reverse().map((round) => (
                  <Guess 
                    key={round.answer.lat}
                    number={round.number}
                    city={round.question.city}
                    iso2={round.question.iso2}
                    country={round.question.country}
                    distance={round.distance}
                    score={round.score}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  };

  const GuessesOnMap = (props) => {
    const {rounds} = props;
    // Last guess only
    const lastRound = rounds.slice(-1);
    return(
      <>
        {rounds[0] && ( 
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
        )};
      </>
    );
  };

  // Buttons to start game and submit guess
  const GameControls = (props) => {
    const {game, submitGuess, startNewGame, getNextQuestion} = props;
    return(
      <div>
        {game.currentRound > 0 && (
          !game.currentRoundAnswered ? <button onClick={submitGuess}>Submit guess</button> : <button onClick={getNextQuestion}>Next round</button>
        )}
        <button onClick={startNewGame}>{game.currentRound < 1 ? 'Start new': 'Restart'} game</button>
      </div>
    );
  };

  // Display game total score
  const ScoreBoard = (props) => {
    const {totalScore, currentRound} = props;
    return(
      <>
        <h2>Round {currentRound}<br />Total score {totalScore}</h2>
      </>
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 400px', padding: '0 20px' }}>
        <h1>MapDasher</h1>
        {game.currentRound > 0 ?
          <ScoreBoard 
            totalScore={game.totalScore} 
            currentRound={game.currentRound}
          /> : null }
        <GameControls 
          game={game}
          submitGuess={submitGuess}
          startNewGame={startNewGame}
          getNextQuestion={getNextQuestion}
        />
        {game.currentRound > 0 && (
          <>
            {!game.currentRoundAnswered ? 
              <Question 
                currentRound={game.currentRound}
                locations={locations}
              /> : null }
            <GuessList 
              rounds={rounds}
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
          ref={mapRef}
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
          {game.currentRoundAnswered 
            ? <GuessesOnMap rounds={rounds} />
            : null
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default GuessLocation;