import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-[80vw]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red"></div>
      <p className='ml-2' >Loading</p>
    </div>
  );
};

export default Loading;