import React from 'react';

const SettingsInput = ({setSettings, setting, value, text}) => {

  const handleChange = (e) => {
    setSettings((prevState) => ({
      ...prevState,
      rounds: parseInt(e.target.value, 10)
    }));
  };

  return(
    <>
      <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold my-3" htmlFor="settings-rounds">
        {text}
      </label>
      <div className="relative">
        <input
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id={`settings-${setting}`}
          type="number"
          value={value}
          min="0"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

export default SettingsInput;