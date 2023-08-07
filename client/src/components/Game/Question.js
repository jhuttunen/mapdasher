import React from 'react';
import LoadingSpinner from '../Elements/LoadingSpinner/LoadingSpinner';

// Current round question 
const Question = ({city, iso2, answered, distance, isLoading, errorMessage, showFlag, gameOver}) => {
  const renderQuestion = (
    <>
      {errorMessage 
        ? <div className="text-red-500 text-lg lg:text-xl">{errorMessage}</div> 
        : gameOver ? <div className="game-over text-lg uppercase font-serif font-extrabold text-gray-200 md:text-2xl 2xl:text-3xl">Game Over</div>
          :  
          <>
            <div className="text-xs md:text-sm lg:text-base">
              {!answered 
                ? 'Dash your way on the map to' 
                : `You were ${distance} km away from`}
            </div>
            <div className="inline-flex justify-center">
              <span className="text-base lg:text-xl"><b>{city}</b></span>
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
    <div id="question" className="flex items-center justify-center order-2 h-16 p-1 col-span-4 md:h-22 md:shadow-md md:rounded">
      <div className="text-center text-sm md:order-2 md:h-22 md:p-3 md:text-base">
        { isLoading ? <LoadingSpinner /> : renderQuestion }
      </div>
    </div>
  );
};

export default Question;