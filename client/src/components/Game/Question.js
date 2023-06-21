import React from 'react';

// Current round question 
const Question = ({city, iso2, answered, distance}) => {
  return (
    <div id="question" className="order-2 col-span-4 my-1 md:mx-3 shadow-md">
      <div className="h-12 text-center text-sm md:order-2 md:h-20 md:p-3 md:text-base">
        <span className="text-sm md:text-sm lg:text-lg">
          {!answered 
            ? 'Dash your way on a map to' 
            : `You were ${distance} km away from`}
        </span><br />
        <span className="inline-flex align-middle text-center">
          <span className="text-lg text-center lg:text-xl"><b>{city}</b></span>
          { iso2 ?
            <img 
              src={`https://flagsapi.com/${iso2}/shiny/24.png`} 
              className="ml-1 self-center"
            />
            : null }
        </span>
      </div>
    </div>
  );
};

export default Question;