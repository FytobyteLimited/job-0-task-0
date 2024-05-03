import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      className='bg-black text-white text-sm rounded w-[156.45px] text-center py-2'
    >
      {text}
    </button>
  );
};

export default Button;
