import React from 'react';

const Content =({children}) =>{
  return(
    <>
      <div className="z-0 h-screen w-screen md:h-screen">
        {children}
      </div>
    </>
  );
};

export default Content;