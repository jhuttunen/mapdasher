import React from 'react';
import LoadingSpinner from '../Elements/LoadingSpinner/LoadingSpinner';

// Current round question 
const Question = ({city, iso2, answered, distance, isLoading, errorMessage, showFlag, gameOver}) => {
  const renderQuestion = (
    <>
      {errorMessage 
        ? <div className="text-red-500 text-lg lg:text-xl">{errorMessage}</div> 
        : gameOver ? <div className="text-4xl uppercase font-serif font-extrabold md:text-5xl text-gray-300">Game Over</div>
          :  
          <>
            <div className="text-sm md:text-sm lg:text-lg">
              {!answered 
                ? 'Dash your way on the map to' 
                : `You were ${distance} km away from`}
            </div>
            <div className="inline-flex justify-center">
              <span className="text-lg lg:text-xl"><b>{city}</b></span>
              { iso2 && showFlag ?
                <img 
                  src={`https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`} 
                  className="ml-1 self-center"
                  width="24"
                  height="18"
                  alt="Flag"
                />
                : null }
            </div>
          </>
      }
    </>
  );
  return(
    <div id="question" className="flex items-center justify-center order-2 my-1 col-span-4 md:h-24 md:mx-3 shadow-md rounded">
      <div className="text-center text-sm md:order-2 md:h-22 md:p-3 md:text-base">
        { isLoading ? <LoadingSpinner /> : renderQuestion }
      </div>
    </div>
  );
};

export default Question;