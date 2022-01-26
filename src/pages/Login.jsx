import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-700'>Inicia sesión en tu cuenta</h2>
      <form className='mt-3 max-w-md'>
        <div>
          <input className='appearance-none px-3 py-2 focus:outline-none border border-gray-300 text-gray-700 rounded-md focus:ring-red-600  focus:border-red-600 focus:z-10 sm:text-sm' type='email' placeholder='fhsdf@katharsis.com.co' required />
          <input className='appearance-none px-3 py-2 focus:outline-none border border-gray-300 text-gray-700 rounded-md focus:ring-red-600  focus:border-red-600 focus:z-10 sm:text-sm' type='password' required />
        </div>
        <div>
          <div className='flex flex-wrap justify-between'>
            <label htmlFor='recuerdame'>
              <input type='checkbox' name='recuerdame' />
              Recuérdame
            </label>
            <div>
              <Link to='/'>
                Olvidates tu contraseña
              </Link>
            </div>
          </div>
          <div>
            <Link to='/admin'>
              <button type='submit'>Iniciar sesión</button>
            </Link>
          </div>
          <div>
            o
          </div>
          <div>
            <button>Inicia sesión con Google</button>
          </div>
        </div>
      </form>
    </div>
  )
};

/*El htmlfor con el name es importante por buenas prácticas y porque ayuda al seo */

export default Login;
