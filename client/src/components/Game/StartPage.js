import React from 'react';
import SettingsMenu from './SettingsMenu';

// Buttons to start game and submit guess
const StartPage = ({startNewGame, settings, setSettings, resume, resumeGame}) => {
  return(
    <div id="start-menu" className="fixed left-0 top-0 h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white w-full h-full p-8 m-auto md:shadow-md md:rounded md:h-auto md:w-auto">
        <h1 className="text-4xl">
          MapDasher
        </h1>
        <p className="my-3">MapDasher is a game where your quest is to find locations on the map. Are you the the ultimate dashmaster?</p>
        <form>
          <SettingsMenu 
            settings={settings}
            setSettings={setSettings}
          />
          <div className="grid grid-cols-2 space-x-3">
            <button type="button" className="btn btn-dark btn-dark:hover h-full w-full mt-3" onClick={startNewGame}>Start new game</button>
            {resume && 
            <button type="button" className="btn btn-light btn-light:hover h-full w-full mt-3" onClick={resumeGame}>Back to current game</button> 
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartPage;