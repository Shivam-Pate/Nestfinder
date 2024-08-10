import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from '../assets/logo.png'


const Header = () => {

  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);





  return (
    <div>
         <header className=' bg-stone-900 shadow-md '>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-3  '>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'>
            <span className='text-slate-200 '>Nest</span>
            <span className='text-slate-200'>Finder</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='bg-slate-900 p-3 rounded-full'>
            <FaSearch className='text-white ' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-200 hover:underline sm:text-3xl'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-200 hover:underline sm:text-3xl '>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-10 w-10 object-cover border-2 border-solid border-white'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-200 sm:text-3xl hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
    </div>
  )
}

export default Header