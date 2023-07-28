import React, { process, useState, useRef } from 'react'; 
import { useMediaQuery } from 'react-responsive';
import { GameControls, GuessList, Question, ScoreBoard, StartPage } from './';
import { GameMap } from '../Map';
import { Layout } from '../Layout/';
import LocationPicker from '../Map/LocationPicker';
import haversine from 'haversine';

const Game = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const mapRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [settings, setSettings] = useState({
    rounds: 0,
    locations: 'capitals',
    map: 'default',
  });
  const [game, setGame] = useState({gameState: false, currentRound:0, totalScore:0});
  const [locations, setLocations] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [guessMarker, setGuessMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle starting new game
  const startNewGame = () => {
    setLocations([]);
    setGuessMarker(null);
    setRounds([]);
    setGame({gameState: true, currentRound:1, totalScore:0});
    fetchAndSetLocation('newGame', settings.locations);
    resetMapZoom();
  };

  // Handle toggling game state on and off
  const toggleGameState = () => {
    setGame((prevState) => ({
      ...prevState,
      gameState: (prevState.gameState === false ) ? true : false
    }));
  };


  console.log(game.gameState);

  // Get new question
  const getNextQuestion = () => {
    setGame((prevState) => ({
      ...prevState,
      currentRound: prevState.currentRound + 1, currentRoundAnswered: false
    }));
    fetchAndSetLocation(null, settings.locations);
    resetMapZoom();
    setGuessMarker(null);
  };

  // Handle submitting guess
  const submitGuess = () => {
    if(guessMarker){
      const distance = calculateDistance(
        {'lat': guessMarker.lat, 'lon': guessMarker.lng}, 
        {'lat': locations[game.currentRound-1].lat, 'lon': locations[game.currentRound-1].lng}
      );
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
    }
  };

  // Fetch random location from API
  const fetchAndSetLocation = (newGame, type) => {
    setIsLoading(true);
    let url = '';
    switch(type){
    case 'capitals':
      url = `${API_URL}/api/random/capitals`;
      break;
    case 'world':
      url = `${API_URL}/api/random/cities`;
      break;
    default:
      url = `${API_URL}/api/random/cities`;
      break;
    }
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        let location = response[0];
        location.round = game.currentRound;
        // Overwrite previous locations if new game
        (newGame) ? setLocations([location]) : setLocations([...locations, location]);
        setErrorMessage('');
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage('Unable to fetch location data.');
        setIsLoading(false);
      });
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
      mapRef.current.fitWorld({duration: 0.5});
    }
  };

  // Zoom to submitted guess and fit map bounds accordingly
  const zoomToGuess = (lastRound) => {
    if(lastRound.answer && lastRound.question){
      const bounds = [[lastRound.answer.lat, lastRound.answer.lng], [lastRound.question.lat, lastRound.question.lng]];
      if(mapRef.current){
        mapRef.current.flyToBounds(bounds, {duration: 0.5, padding: [((isMobile) ? 50 : 200), ((isMobile) ? 150 : 200)]});
      }
    }
  };

  return (
    <>
      {game.gameState === false ? (
        <StartPage
          startNewGame={startNewGame}
          settings={settings}
          setSettings={setSettings}
          resume={game.currentRound > 0 ? true : false}
          resumeGame={toggleGameState}
        />
      ) : (
        <Layout
          sidebar={
            <>
              <ScoreBoard 
                totalScore={game.totalScore} 
                currentRound={game.currentRound}
              />
              <GameControls 
                game={game}
                submitGuess={submitGuess}
                startNewGame={startNewGame}
                getNextQuestion={getNextQuestion}
                endGame={toggleGameState}
              />
              <Question 
                city={(locations[game.currentRound-1]) ? locations[game.currentRound-1].city_name : ''}
                iso2={(locations[game.currentRound-1]) ? locations[game.currentRound-1].iso2 : ''}
                answered={game.currentRoundAnswered}
                distance={(game.currentRoundAnswered) ? rounds[game.currentRound-1].distance : 0}
                isLoading={isLoading}
                errorMessage={errorMessage}
              /> 
              <GuessList rounds={rounds} />
            </>
          }
          content={
            <>
              {game.gameState === true ?
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
                : null }
            </>
          }
        >
        </Layout>
      )}
    </>
  );
};

export default Game;