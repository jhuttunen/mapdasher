import React from 'react';

const SettingsSelect = ({setSettings, setting, selected, options, text}) => {

  const handleChange = (e) => {
    setSettings((prevState) => ({
      ...prevState,
      [setting]: e.target.value
    }));
  };

  return(
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold my-3" htmlFor="settings-locations">
        {text}
      </label>
      <select 
        className="relative block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
        id={`settings-${setting}`}
        value={selected}
        onChange={(e) => handleChange(e)}
      >
        {options.map((option, key) => (
          <option key={key} value={option.value}>{option.text}</option>
        ))}
      </select>
    </>
  );
};

export default SettingsSelect;