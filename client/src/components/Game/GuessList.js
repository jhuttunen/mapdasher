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
          absolute right-0 top-32 max-w-fit max-h-[75vh] overflow-y-auto overflow-x-hidden flex bg-white rounded border border-gray-200 text-xs
          md:static md:block md:order-last md:max-w-full md-max-h-full md:border-0 md:p-0 md:pt-3 md:text-xs lg:text-sm">
          <button
            onClick={toggleVisibility}
            className="bg-white rounded-l p-3 inline-flex items-top md:hidden"
          >
            <span>|||</span>
          </button> 
          <div id="round-history" className={`${isHidden ? 'hidden' : 'block'} p-2 md:static md:z-0 md:block md:p-0`}>
            <div className="flex flex-row">
              <table className="grow bg-gray-50">
                <thead className="bg-gray-200">
                  <tr className="space-x-2 text-right border border-spacing-1 border-white">
                    <th className="text-center">#</th>
                    <th>Score</th>
                    <th>Distance</th>
                    <th className="text-left pl-5"colSpan={2}>Location</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-100 bg-opacity-0 md:bg-opacity-100">
                  {rounds.slice().reverse().map((round) => (
                    <tr key={round.number} className="space-x-2 text-right border border-spacing-1 border-white">
                      <td className="text-center">{round.number}</td>
                      <td>{round.score}</td>
                      <td>{round.distance} km</td>
                      <td className="text-left pl-5 truncate">{round.question.city_name}</td>
                      <td>
                        <img 
                          src={`https://flagcdn.com/24x18/${round.question.iso2.toLowerCase()}.png`} 
                          width="24"
                          height="18"
                          title={round.question.country}
                          alt={round.question.country}
                        />
                      </td>
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