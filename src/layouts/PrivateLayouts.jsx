import Sidebar from 'components/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayouts = () => {
  return (
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <main className='flex w-full bg-gray-100 overflow-y-scroll overflow-x-scroll items-center justify-center m-0 p-0'>
        <Outlet />
      </main>
    </div>
  )
};

export default PrivateLayouts;
