import React from 'react';

// Current round question 
const Question = ({city, iso2}) => {
  return (
    <div id="question">
      <h2>Your quest is</h2>
      <span style={{ display:'inline-flex', alignItems: 'center', lineHeight:'24px'}}>
        <span>... to dash around map to <b>{city}</b></span>
        <img 
          src={`https://flagsapi.com/${iso2}/shiny/24.png`} 
          style={{marginLeft:'5px'}}
        />
      </span>
    </div>
  );
};

export default Question;