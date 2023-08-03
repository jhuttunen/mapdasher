import React from 'react';
import SettingsMenu from './SettingsMenu';
import MapDasherLogo from '../Elements/MapDasherLogo/MapDasherLogo';

// Buttons to start game and submit guess
const StartPage = ({startNewGame, settings, setSettings, resume, resumeGame}) => {
  return(
    <div id="start-menu" className="h-screen w-screen md:h-auto md:w-auto">
      <div className="flex justify-center items-center w-auto h-auto">
        <MapDasherLogo />
      </div>
      <div className="bg-white w-full h-full p-3 md:h-auto md:w-auto md:p-0 md:py-0">
        <p>
          MapDasher is a game where your quest is to find locations on the map. Are you the the ultimate dashmaster?
        </p>
        <form>
          <div className="flex space-x-2">
            {resume && 
            <button type="button" className="btn btn-light btn-light:hover h-full w-full mt-3" onClick={resumeGame}>Back</button> 
            }
            <button type="button" className="btn btn-dark btn-dark:hover h-full w-full mt-3" onClick={startNewGame}>Start new game</button>
          </div>
          <SettingsMenu 
            settings={settings}
            setSettings={setSettings}
          />
        </form>
      </div>
    </div>
  );
};

export default StartPage;