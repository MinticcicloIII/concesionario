import useActiveRoute from 'hooks/useActiveRoute';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImagenLogo from './ImagenLogo';
/*Uno debe garantizar que la menos se vea en 300px */
const Sidebar = () => {
  return (
      <nav className='hidden md:flex md:w-72 bg-red-400 h-full flex flex-col border border-gray-500 p-4 sidebar'>

        <Link to='admin' >
          <ImagenLogo />
        </Link>
        <div className='my-4'>

          <Ruta icono='fas fa-user' ruta='admin/profile' nombre='Perfil' />
          <Ruta icono='fas fa-car' ruta='admin/vehiculos' nombre='Vehículos' />
          <Ruta icono='fas fa-cash-register' ruta='admin/ventas' nombre='Ventas' />
          <Ruta icono='fas fa-users' ruta='admin/usuarios' nombre='Usuarios' />

        </div>
        <button>Cerrar sesión</button>

      </nav >
  );
};
const Ruta = ({ icono, ruta, nombre }) => {
  const isActive = useActiveRoute(ruta);

  return (
    <Link to={ruta}>
      <button className={`flex my-2 hover:bg-indigo-900 p-1 ${isActive ? 'bg-indigo-600':'bg-gray-900'} w-full items-center text-white rounded-md`}>
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  )
}

export default Sidebar;
