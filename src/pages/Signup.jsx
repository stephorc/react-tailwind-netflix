import React, { useState } from 'react';
import NetflixBg from '../netflix-signup-bg.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-full h-screen relative'>
      <img
        src={NetflixBg}
        alt="Netflix popular shows background."
        className='w-full h-full object-cover absolute'
      />
      <div className='bg-gradient-to-b from-black via-black/40 to-black fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
          <div className='max-w-[320px] mx-auto py-16 text-center'>
            <h1 className='text-2xl font-bold md:text-3xl'>Unlimited movies, TV shows, and more.</h1>
            {/* <h2 className='text-lg py-3 sm:py-4 sm:text-xl'>Watch anywhere. Cancel anytime.</h2> */}
            {/* <p className='text-sm px-4 sm:text-xl'>
              Ready to watch? 
              Enter your email and create a password to start your membership.
            </p> */}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type='email'
                placeholder='Email or phone number'
                autoComplete='email'
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className='p-3 my-2 bg-gray-700 rounded'
                type='password'
                placeholder='Password'
                autoComplete='current-password'
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign Up
              </button>
              <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Need help?</p>
              </div>
              <p className='py-8 text-left'>
                <span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                <Link to='/login'>
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;