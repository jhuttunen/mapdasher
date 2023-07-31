import React from 'react';

const Sidebar =({children}) =>{
  return(
    <>
      <div className="
        fixed grid grid-cols-6 z-10 h-25 bg-white w-screen gap-1
        md:grid-0 md:flex md:flex-col md:static md:z-0 md:h-screen md:w-2/5 md:gap-0 md:p-0 text-sm lg:w-2/6 lg:text-sm lg:p-3
      ">
        {children}
      </div>
    </>
  );
};

export default Sidebar;