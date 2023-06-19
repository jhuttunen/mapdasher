import React, { useState, useRef } from 'react';
import { GameControls, GuessList, Question, ScoreBoard } from './';
import { GameMap } from '../Map';
import LocationPicker from '../Map/LocationPicker';
import haversine from 'haversine';

const Game = () => {
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

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '0 0 400px', padding: '0 20px' }}>
        <h1>MapDasher</h1>
        {game.currentRound > 0 ? (
          <ScoreBoard 
            totalScore={game.totalScore} 
            currentRound={game.currentRound}
          />
        ) : null }
        <GameControls 
          game={game}
          submitGuess={submitGuess}
          startNewGame={startNewGame}
          getNextQuestion={getNextQuestion}
        />
        {game.currentRound > 0 ? (
          <>
            {!game.currentRoundAnswered && locations[game.currentRound-1] ? (
              <Question 
                city={locations[game.currentRound-1].city}
                iso2={locations[game.currentRound-1].iso2}
              /> 
            ) : null }
            <GuessList rounds={rounds} />
          </> 
        ) : null }
      </div>
      <div style={{ flex: '1' }}>
        <GameMap 
          rounds={rounds}
          currentRoundAnswered={game.currentRoundAnswered}
          mapRef={mapRef}
          locationPicker={
            <LocationPicker
              currentRound={game.currentRound}
              guessMarker={guessMarker}
              setGuessMarker={setGuessMarker}
            />}
        />
      </div>
    </div>
  );
};

export default Game;