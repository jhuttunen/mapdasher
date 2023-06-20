import React from 'react';

const Header =({title, children}) =>{
  return(
    <header className="fixed top-0 left-2 z-20 p-1 md:static md:z-0 md:p-3">
      <h1 className="text-sm font-bold md:text-4xl">
        {title}
      </h1>
      {children}
    </header>
  );
};

export default Header;