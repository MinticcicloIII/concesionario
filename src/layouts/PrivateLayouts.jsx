import Sidebar from 'components/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayouts = () => {
  return (
    <div className='flex flex-wrap justify-between h-screen w-max'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
};

export default PrivateLayouts;
