import React from 'react';
import Logo from '../Netflix-logo.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full p-8 z-[999] absolute'>
      <img src={Logo} alt="Netflix" className='cursor-pointer w-20 md:w-28' />
      <div>
        <button className='text-white px-4 py-1 md:px-6 md:py-2'>Sign In</button>
        <button className='bg-red-600 text-white rounded cursor-pointer px-4 py-1 md:px-6 md:py-2'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;