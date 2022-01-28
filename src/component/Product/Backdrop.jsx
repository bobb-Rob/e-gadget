import React from 'react';

const Backdrop = ({close}) => {
  return <div 
  className='backdrop' 
  onClick={() => close()}
  />;
};

export default Backdrop;
