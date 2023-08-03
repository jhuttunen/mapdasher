import React from 'react';
import SettingsToggle from '../Elements/SettingsToggle/SettingsToggle';
import SettingsSelect from '../Elements/SettingsSelect/SettingsSelect';
import SettingsInput from '../Elements/SettingsInput/SettingsInput';

const SettingsMenu = ({settings, setSettings}) => {
  let subSelect = (settings.locations === 'continent' || settings.locations === 'country') ? 'grid-cols-2' : 'grid-cols-1';
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
      <div className={`grid ${subSelect} gap-x-1`}>
        <div>
          <SettingsSelect
            setSettings={setSettings}
            setting={'locations'}
            selected={settings.locations}
            options={
              [
                {'value': 'capitals', 'text': 'Capitals'},
                {'value': 'world', 'text': 'World'},
                {'value': 'continent', 'text': 'Continent'},
              ]
            }
            text={'Locations'}
            subSettings={true}
          />
        </div>
        {settings.locations === 'continent' &&
        <div>
          <SettingsSelect
            setSettings={setSettings}
            setting={'continent'}
            selected={settings.continent}
            options={
              [
                {'value': 'AF', 'text': 'Africa'},
                {'value': 'AS', 'text': 'Asia'},
                {'value': 'EU', 'text': 'Europe'},
                {'value': 'NA', 'text': 'North America'},
                {'value': 'OC', 'text': 'Oceania'},
                {'value': 'SA', 'text': 'South America'},
              ]
            }
            text={'Continent'}
          />
        </div>
        }
      </div>
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