import React from 'react';
import MapDasherLogo from '../Elements/MapDasherLogo/MapDasherLogo';

const Sidebar =({children, gameActive}) =>{
  return(
    <>
      <div className="
        fixed grid grid-cols-8 z-10 h-25 bg-white w-screen gap-1
        md:grid-0 md:flex md:flex-col md:static md:z-0 md:h-screen md:w-2/5 md:gap-0 md:p-3 text-sm lg:w-2/6 lg:text-sm
      ">
        {gameActive && 
        <div className="col-span-2 flex justify-center items-center w-auto h-auto">
          <MapDasherLogo /> 
        </div>
        }
        {children}
      </div>
    </>
  );
};

export default Sidebar;