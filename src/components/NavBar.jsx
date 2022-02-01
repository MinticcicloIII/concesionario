import React from 'react';
import { Link } from 'react-router-dom';
import TriggerDarkMode from './TriggerDarkMode';

const NavBar = () => {
  return (
    <nav className='flex bg-gray-800 text-indigo-100 border border-lime-200'>
      <ul className='flex w-full justify-between my-3'>
        <li>Logo</li>
        <li>Nav1</li>
        <li>Nav2</li>
        <li>
          <TriggerDarkMode/>
        </li>
        <li className='px-4'>
          <Link to='/login'>
            <button className='bg-lime-200 text-indigo-900 p-3 rounded-lg shadow-md hover:bg-lime-900 hover:text-violet-200'>Iniciar Sesion</button>
          </Link>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;
