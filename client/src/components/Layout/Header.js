import React from 'react';

const Header =({title, children}) =>{
  return(
    <header className="fixed top-0 left-1 z-20 p-1 md:static md:z-0 md:left-auto md:top-auto md:p-0 md:w-full">
      <h1 className="hidden text-sm font-bold md:text-3xl text-gray-500">
        {title}
      </h1>
      {children}
    </header>
  );
};

export default Header;