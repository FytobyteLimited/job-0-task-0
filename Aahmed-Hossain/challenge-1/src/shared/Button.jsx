import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-black text-white text-sm rounded w-[156.45px] text-center py-2'
    >
      {children}
    </button>
  );
};

export default Button;
