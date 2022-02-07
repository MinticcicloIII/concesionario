import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayouts = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex flex-nowrap h-full w-full'>

        <Sidebar />
        <SidebarResponsive />

        <main className='flex w-full overflow-y-scroll overflow-x-scroll items-center justify-center m-0 p-0'>
          <Outlet />
        </main>
      </div>
    </div>
  )
};

export default PrivateLayouts;
