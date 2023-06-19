import React from 'react';

const Content =({children}) =>{
  return(
    <>
      <div className="z-0 h-1/2 flex-grow md:h-screen md:w-3/5 xl:w-3/4">
        {children}
      </div>
    </>
  );
};

export default Content;