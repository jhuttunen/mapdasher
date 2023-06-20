import React from 'react';

// Current round question 
const Question = ({city, iso2, answered}) => {
  return (
    <div id="question" className="order-2 col-span-3">
      {!answered ? 
        <div className="bg-blue-100 bg-opacity-50 p-1 shadow-md text-center text-sm md:order-2 md:p-3 md:mx-3 md:text-base">
          <span className="text-sm md:text-lg">Your quest is to dash around map to</span><br />
          <span className="inline-flex align-middle text-center leading-6">
            <span className="text-lg text-center md:text-xl"><b>{city}</b></span>
            <img 
              src={`https://flagsapi.com/${iso2}/shiny/24.png`} 
              style={{marginLeft:'5px'}}
            />
          </span>
        </div>
        : null }
    </div>
  );
};

export default Question;