import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

/* El h-screen sirve para que ocupe todo el espacio de l apantalla  */
/* El overflow-y-scroll pone un scroll en l parte determinada h-full hace que ocupe todo el espacio (ojo es diferente al h-screen) */
const PublicLayout = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <NavBar/>
      <main className='h-full overflow-y-scroll'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
};

export default PublicLayout;
