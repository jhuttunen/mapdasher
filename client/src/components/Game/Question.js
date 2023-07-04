import React from 'react';
import LoadingSpinner from '../Elements/LoadingSpinner/LoadingSpinner';

// Current round question 
const Question = ({city, iso2, answered, distance, isLoading, errorMessage}) => {
  const renderQuestion = (
    <>
      {errorMessage 
        ? <span className="text-red-500 text-lg text-center lg:text-xl">{errorMessage}</span> 
        : <>
          <span className="text-sm md:text-sm lg:text-lg">
            {!answered 
              ? 'Dash your way on a map to' 
              : `You were ${distance} km away from`}
          </span><br />
          <span className="inline-flex align-middle text-center">
            <span className="text-lg text-center lg:text-xl"><b>{city}</b></span>
            { iso2 ?
              <img 
                src={`https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`} 
                className="ml-1 self-center"
                width="24"
                height="18"
                alt="Flag"
              />
              : null }
          </span>
        </> }
    </>
  );
  return(
    <div id="question" className="order-2 col-span-4 my-1 md:mx-3 shadow-md">
      <div className="h-12 text-center text-sm md:order-2 md:h-20 md:p-3 md:text-base">
        { isLoading ? <LoadingSpinner /> : renderQuestion }
      </div>
    </div>
  );
};

export default Question;