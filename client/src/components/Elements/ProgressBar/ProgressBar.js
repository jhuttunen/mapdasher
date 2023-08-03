import React from 'react';

const ProgressBar = ({percentage}) => {
  return (
    <div className='h-4 w-full rounded bg-gray-200'>
      <div
        style={{ width: `${percentage}%`}}
        className={`h-full rounded ${percentage < 50 ? 'bg-red-500' : 'bg-gray-500'}`}
      >
      </div>
    </div>
  );
};

export default ProgressBar;