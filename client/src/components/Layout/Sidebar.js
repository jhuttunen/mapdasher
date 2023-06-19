import React from 'react';

const Sidebar =({children}) =>{
  return(
    <>
      <div className="p-3 md:h-screen md:min-w-max md:w-2/6 lg:w-1/4">
        {children}
      </div>
    </>
  );
};

export default Sidebar;