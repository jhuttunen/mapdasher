import React from 'react';

const Sidebar =({children}) =>{
  return(
    <>
      <div style={{ flex: '0 0 400px', padding: '0 20px' }}>
        {children}
      </div>
    </>
  );
};

export default Sidebar;