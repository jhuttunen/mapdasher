import React, {useState} from 'react';

// List of made guesses
const GuessList = ({rounds}) => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return(
    <>
      {rounds[0] ? (
        <div className="
          absolute right-0 top-24 max-w-fit flex bg-white rounded border border-gray-200 text-sm
          md:static md:block md:order-last md:max-w-full md:border-0 md:p-0 md:pt-3 md:text-xs lg:text-sm">
          <button
            onClick={toggleVisibility}
            className="bg-white rounded-l p-3 md:hidden"
          >
            ||| 
          </button> 
          <div id="round-history" className={`${isHidden ? 'hidden' : 'block'} md:static md:z-0 md:block p-3`}>
            <h2 className="text-base">Previous rounds</h2>
            <div className="flex flex-row">
              <table className="grow bg-slate-50">
                <thead className="bg-slate-200">
                  <tr className="space-x-2 text-right border border-spacing-1 border-white">
                    <th className="text-center">Rnd</th>
                    <th>Score</th>
                    <th>Distance</th>
                    <th className="text-left pl-5"colSpan={2}>Target location</th>
                  </tr>
                </thead>
                <tbody className="bg-slate-100 bg-opacity-0 md:bg-opacity-100">
                  {rounds.slice().reverse().map((round) => (
                    <tr key={round.question.lat} className="space-x-2 text-right border border-spacing-1 border-white">
                      <td className="text-center">{round.number}</td>
                      <td>{round.score}</td>
                      <td>{round.distance} km</td>
                      <td className="text-left pl-5 truncate">{round.question.city}</td>
                      <td><img src={`https://flagsapi.com/${round.question.iso2}/shiny/24.png`} title={round.question.country}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : null }
    </>
  );
};

export default GuessList;