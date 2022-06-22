import React from 'react';
import NetflixBg from '../netflix-signup-bg.png';

const Account = () => {
  return (
    <div>
      <div className='w-full text-white'>
        <img
          src={NetflixBg}
          alt="Netflix popular shows background."
          className='w-full h-[400px] object-cover'
        />
        <div className='bg-gradient-to-b from-black via-black/40 to-black fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
      </div>
    </div>
  );
};

export default Account;