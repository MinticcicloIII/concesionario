import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-green-200 py-2 px-10 mx-80 my-40 rounded-md'>
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
