import React from 'react';
import SettingsToggle from '../Elements/SettingsToggle/SettingsToggle';
import SettingsSelect from '../Elements/SettingsSelect/SettingsSelect';
import SettingsInput from '../Elements/SettingsInput/SettingsInput';

const SettingsMenu = ({settings, setSettings}) => {
  return(
    <div>
      <h2 className="text-2xl mb-3 my-5">
        Settings
      </h2>
      <SettingsInput
        setSettings={setSettings}
        setting={'rounds'}
        value={settings.rounds}
        text={'Rounds (0 = unlimited)'}
      />
      <SettingsSelect
        setSettings={setSettings}
        setting={'locations'}
        selected={settings.locations}
        options={
          [
            {value: 'capitals', text: 'Capital cities'},
            {value: 'world', text: 'World cities'},
          ]
        }
        text={'Locations'}
      />
      {/*<SettingsSelect
        setSettings={setSettings}
        setting={'map'}
        selected={settings.map}
        options={
          [
            {value: 'default', text: 'Default, location names hidden'},
            {value: 'colourful', text: 'Colourful, location names hidden'},
            {value: 'names', text: 'Easy mode, location names included'},
          ]
        }
        text={'Map style'}
      />*/}
      <SettingsInput
        setSettings={setSettings}
        setting={'timer'}
        value={settings.timer}
        text={'Round timer in seconds (0 = disabled)'}
      />
      <SettingsToggle
        setSettings={setSettings}
        setting={'flag'}
        checked={settings.flag}
        text={'Show country flag in questions'}
      />
    </div>
  );
};

export default SettingsMenu;