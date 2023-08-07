import React from 'react';
import SettingsMenu from './SettingsMenu';
import MapDasherLogo from '../Elements/MapDasherLogo/MapDasherLogo';

// Buttons to start game and submit guess
const StartPage = ({startNewGame, settings, setSettings, resume, resumeGame, gameActive}) => {
  return(
    <div id="start-menu" className="flex flex-col h-screen w-screen md:w-auto">
      <div className="flex justify-center items-center h-auto w-screen md:w-auto 2xl:-ml-2">
        <MapDasherLogo gameActive={gameActive} />
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
      <div className="flex flex-1 items-end p-3 mt-3 border-t-gray-200 border-t text-gray-600 md:p-0">
        <ul className="list-disc text-xs py-3">
          <h3 className="font-bold">About</h3>
          <li className="ml-3">Source code released in <a href="https://github.com/jhuttunen/mapdasher" target="new">GitHub</a> under MIT licence</li>
          <li className="ml-3">Cities data from <a href="https://simplemaps.com/" target="new">World Cities Database (basic)</a> under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></li>
          <li className="ml-3"><a href="https://github.com/annexare/Countries" target="new">Countries, Languages & Continents data</a> under MIT licence</li>
          <li className="ml-3">World graphic in logo from <a href="https://www.freepik.com/free-vector/3d-globe-map-isolated-white-background_37205420.htm" target="new">3D world by starline</a></li>
        </ul>
      </div>
    </div>
  );
};

export default StartPage;