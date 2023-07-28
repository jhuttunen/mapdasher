import React from 'react';
import SettingsMenu from './SettingsMenu';

// Buttons to start game and submit guess
const StartPage = ({startNewGame, settings, setSettings}) => {
  return(
    <div id="start-menu" className="fixed left-0 top-0 h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white w-full h-full px-8 pt-6 pb-8 m-8 md:shadow-md md:rounded md:w-auto md:h-auto">
        <h1 className="text-4xl">
          MapDasher
        </h1>
        <p className="my-3">MapDasher is a game where your quest is to find locations on the map. Are you the the ultimate dashmaster?</p>
        <form>
          <SettingsMenu 
            settings={settings}
            setSettings={setSettings}
          />
          <button type="button" className="btn btn-dark btn-dark:hover h-full w-full mt-3" onClick={startNewGame}>Start new game</button> 
        </form>
      </div>
    </div>
  );
};

export default StartPage;