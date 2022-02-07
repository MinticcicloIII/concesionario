import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
    const [mostrarNavegacion, setMostrarNavegacion] = useState(false)
    return (
        <div className='md:hidden' onClick={() => {
            setMostrarNavegacion(!mostrarNavegacion);
        }}>
            <i class={`mx-2 fas fa-${mostrarNavegacion ? 'bars' : 'times'} hover:text-yellow-500`}></i>
            {mostrarNavegacion && <ul className='bg-gray-900 rounded-md'>
                <ResponsiveRoute ruta={'/admin/vehiculos'} nombre={'vehiculos'}/>
                <ResponsiveRoute ruta={'/admin/ventas'} nombre={'ventas'}/>
                <ResponsiveRoute ruta={'/admin/usuarios'} nombre={'usuarios'}/>
                </ul>}
        </div>

    );
};

const ResponsiveRoute = ({ruta,nombre}) => {
    return (
        <Link to={ruta}>
            <li className='text-gray-200 p-2 border border-gray-500'>{nombre}</li>
        </Link>
    )
}

export default SidebarResponsive;
