import React, { process, useEffect, useState, useRef } from 'react'; 
import { useMediaQuery } from 'react-responsive';
import { GameControls, GuessList, Question, ScoreBoard, StartPage } from './';
import { GameMap } from '../Map';
import { Layout } from '../Layout/';
import LocationPicker from '../Map/LocationPicker';
import haversine from 'haversine';

const Game = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const mapRef = useRef(null);
  const timerRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [settings, setSettings] = useState({
    rounds: 5,
    locations: 'capitals',
    continent : 'EU',
    country: 'FI',
    map: 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png',
    flag: true,
    timer: 0
  });
  const [game, setGame] = useState({
    gameActive: false, 
    gameOver: false, 
    currentRound:0, 
    totalScore:0
  });
  const [locations, setLocations] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [guessMarker, setGuessMarker] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timer, setTimer] = useState({
    timerActive:false, 
    timeLeft:0
  });

  // Update the timer
  useEffect(() => {
    if(settings.timer > 0 && game.gameActive && !isLoading){
      if (timer.timeLeft > 0 && timer.timerActive && !game.gameOver) {
        timerRef.current = setInterval(() => {
          setTimer((prevState) => ({
            ...prevState,
            timeLeft: prevState.timeLeft -1
          }));
        }, 1000);
      }
      if(timer.timeLeft === 0 && timer.timerActive){
        gameOver();
      }
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [timer, isLoading, game.gameOver, game.gameActive, settings.timer]);

  // Handle starting new game
  const startNewGame = () => {
    setLocations([]);
    setGuessMarker(null);
    setRounds([]);
    if(settings.timer){
      setTimer((prevState) => ({
        ...prevState,
        timerActive: true, timeLeft: settings.timer
      }));
    }
    setGame({gameActive: true, gameOver: false, currentRound:1, totalScore:0});
    fetchAndSetLocation('newGame', settings.locations, settings.continent, settings.country);
    resetMapZoom();
  };

  // Handle toggling game state on and off
  const toggleGameState = () => {
    setGame((prevState) => ({
      ...prevState,
      gameActive: (prevState.gameActive === false ) ? true : false
    }));
    setTimer((prevState) => ({
      ...prevState,
      timerActive: (prevState.timerActive === false ) ? true : false
    }));
  };

  // Handle gameover
  const gameOver = () => {
    setGame((prevState) => ({
      ...prevState,
      gameOver: true
    }));
  };

  // Get new question
  const getNextQuestion = () => {
    if(settings.timer){
      setTimer((prevState) => ({
        ...prevState,
        timerActive: true, timeLeft: settings.timer
      }));
    }
    setGame((prevState) => ({
      ...prevState,
      currentRound: prevState.currentRound + 1, currentRoundAnswered: false
    }));
    fetchAndSetLocation(null, settings.locations, settings.continent, settings.country);
    resetMapZoom();
    setGuessMarker(null);
  };

  // Handle submitting guess
  const submitGuess = () => {
    if(guessMarker){
      if(settings.timer){
        setTimer((prevState) => ({
          ...prevState,
          timerActive: false
        }));
      }
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
      setRounds((prevState) => [...prevState, round]);
      setGame((prevState) => ({
        ...prevState,
        totalScore: prevState.totalScore+score, currentRoundAnswered: true
      }));
      setGuessMarker(null);
      if(game.currentRound === settings.rounds){
        gameOver();
        resetMapZoom();
      }else{
        zoomToGuess(round); // Zoom to guess location and fit map bounds
      }
    }
  };

  // Fetch random location from API
  const fetchAndSetLocation = (newGame, type, continent, country) => {
    setIsLoading(true);
    let url = '';
    switch(type){
    case 'capitals':
      url = `${API_URL}/api/random/capitals`;
      break;
    case 'world':
      url = `${API_URL}/api/random/cities`;
      break;
    case 'continent':
      url = `${API_URL}/api/random/cities/1/continent/${continent}`;
      break;
    case 'country':
      url = `${API_URL}/api/random/cities/1/country/${country}`;
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
      <Layout
        gameActive={game.gameActive}
        sidebar={
          !game.gameActive ? 
            <StartPage
              startNewGame={startNewGame}
              settings={settings}
              setSettings={setSettings}
              resume={game.currentRound > 0 ? true : false}
              resumeGame={toggleGameState}
              gameActive={game.gameActive}
            />
            :
            <>
              <ScoreBoard 
                totalScore={game.totalScore} 
                currentRound={game.currentRound}
                rounds={settings.rounds}
                timeLeft={timer.timeLeft}
                timer={settings.timer}
                timerActive={timer.timerActive}
              />
              <GameControls 
                game={game}
                submitGuess={submitGuess}
                startNewGame={startNewGame}
                getNextQuestion={getNextQuestion}
                endGame={toggleGameState}
                gameOver={game.gameOver}
              />
              <Question 
                city={(locations[game.currentRound-1]) ? locations[game.currentRound-1].city_name : ''}
                iso2={(locations[game.currentRound-1]) ? locations[game.currentRound-1].iso2 : ''}
                answered={game.currentRoundAnswered}
                distance={(game.currentRoundAnswered) ? rounds[game.currentRound-1].distance : 0}
                isLoading={isLoading}
                errorMessage={errorMessage}
                showFlag={settings.flag}
                gameOver={game.gameOver}
              /> 
              <GuessList rounds={rounds} />
            </>
        }
        content={
          <>
            <GameMap 
              rounds={rounds}
              currentRoundAnswered={game.currentRoundAnswered}
              gameOver={game.gameOver}
              mapRef={mapRef}
              isMobile={isMobile}
              locationPicker={
                <LocationPicker
                  pickerEnabled={(!game.gameOver && game.gameActive) ? true : false}
                  guessMarker={guessMarker}
                  setGuessMarker={setGuessMarker}
                />}
            />
          </>
        }
      >
      </Layout>
      
    </>
  );
};

export default Game;