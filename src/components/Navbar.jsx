import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Netflix-logo.svg'
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between w-full p-8 z-[999] absolute'>
      {/* hover scale w/ press-down on click */}
      <Link to={'/'}>
        <img src={Logo} alt="Netflix" className='cursor-pointer w-20 md:w-28' />
      </Link>
    {user?.email ? (
       <div>
        {/* pr-4? */}
        <Link to={'/account'}>
          <button className='text-white px-4 py-1 md:px-6 md:py-2'>
            Account
          </button>
        </Link>
        <button onClick={handleLogout} className='bg-red-600 text-white rounded cursor-pointer px-4 py-1 md:px-6 md:py-2'>
          Logout
        </button>
      </div>
    ) : (
      <div>
        {/* pr-4? */}
        <Link to={'/login'}>
          <button className='text-white px-4 py-1 md:px-6 md:py-2'>
            Sign In
          </button>
        </Link>
        <Link to={'/signup'}>
          <button className='bg-red-600 text-white rounded cursor-pointer px-4 py-1 md:px-6 md:py-2'>
            Sign Up
          </button>
        </Link>
      </div>
    )}
    </div>
  );
}

export default Navbar;