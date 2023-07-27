import React from 'react';

const SettingsMenu = ({settings, setSettings}) => {
  return(
    <div>
      <h2 className="text-2xl my-3">
        Settings
      </h2>
      {/*<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" htmlFor="settings-rounds">
        Number of rounds (0 = unlimited)
      </label>
      <div className="relative">
        <input
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="settings-rounds"
          type="number"
          value={settings.rounds}
          min="0"
          onChange={(e) => setSettings({ ...settings, rounds: parseInt(e.target.value, 10) })}
        />
      </div>*/}
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" htmlFor="settings-locations">
        Selected locations
      </label>
      <div className="relative">
        <select 
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="settings-locations"
          value={settings.locations}
          onChange={(e) => setSettings({ ...settings, locations: e.target.value })}
        >
          <option value="world">World cities</option>
          <option value="capitals">Capital cities</option>
        </select>
      </div>
      {/*<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" htmlFor="settings-map">
        Background map
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="settings-map"
          value={settings.map}
          onChange={(e) => setSettings({ ...settings, map: e.target.value })}
        >
          <option value="default">Default location names hidden</option>
          <option value="colourful">Colourful location names hidden</option>
          <option value="names">Location names included (easy mode)</option>
        </select>
      </div>
    */}
    </div>
  );
};

export default SettingsMenu;