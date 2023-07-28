import React from 'react';
import LoadingSpinner from '../Elements/LoadingSpinner/LoadingSpinner';

// Current round question 
const Question = ({city, iso2, answered, distance, isLoading, errorMessage, showFlag, gameOver}) => {
  const renderQuestion = (
    <>
      {errorMessage 
        ? <span className="row-span-2 text-red-500 text-lg text-center lg:text-xl">{errorMessage}</span> 
        : gameOver ? <span className="row-span-2 font-serif uppercase text-5xl text-gray-300">Game Over</span>
          :  
          <>
            <span className="inline-block text-center row-span-1 text-sm md:text-sm lg:text-lg">
              {!answered 
                ? 'Dash your way on the map to' 
                : `You were ${distance} km away from`}
            </span><br />
            <span className="row-span-1 inline-flex justify-center">
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
            </span>
          </> 
      }
    </>
  );
  return(
    <div id="question" className="order-2 col-span-4 my-1 md:mx-3 shadow-md rounded">
      <div className="h-12 grid items-center text-center justify-center text-sm md:order-2 md:h-20 md:p-3 md:text-base">
        { isLoading ? <LoadingSpinner /> : renderQuestion }
      </div>
    </div>
  );
};

export default Question;