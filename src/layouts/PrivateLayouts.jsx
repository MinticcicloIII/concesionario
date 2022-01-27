import Sidebar from 'components/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayouts = () => {
  return (
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <main className='flex w-full bg-orange-200 overflow-y-scroll overflow-x-scroll items-center justify-center'>
        <Outlet />
      </main>
    </div>
  )
};

export default PrivateLayouts;
