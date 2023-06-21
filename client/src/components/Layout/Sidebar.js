import React from 'react';

const Sidebar =({children}) =>{
  return(
    <>
      <div className="
        fixed grid grid-cols-5 z-10 h-20 bg-white w-screen gap-2 p-3 pt-5
        md:grid-0 md:flex md:flex-col md:static md:z-0 md:h-screen md:w-2/5 md:gap-0 md:p-0 md:text-xs
        lg:min-w-max lg:w-1/4 lg:text-sm lg:p-3
      ">
        {children}
      </div>
    </>
  );
};

export default Sidebar;