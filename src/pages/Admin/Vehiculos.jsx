import React, { useEffect, useState } from 'react';

const vehiculosBackend = [
  {
    nombre: 'Corolla',
    marca: 'Toyota',
    modelo: 2014,
  },
  {
    nombre: 'Sandero',
    marca: 'Renault',
    modelo: 2020,
  },
  {
    nombre: 'Rav4',
    marca: 'Toyota',
    modelo: 2021,
  },
  {
    nombre: 'Fiesta',
    marca: 'Ford',
    modelo: 2017,
  },
  {
    nombre: 'Mazda 3',
    marca: 'Mazda',
    modelo: 2020,
  },
  {
    nombre: 'Chevrolet',
    marca: 'Onix',
    modelo: 2020,
  },
  {
    nombre: 'Chevrolet',
    marca: 'Onix',
    modelo: 2020,
  },
];




const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([])
  const [textoBoton, setTextoBoton] = useState("Crear neuvo vehículo")

  useEffect(() => {
    setVehiculos(vehiculosBackend)

  }, []);

  /* Este useEffect hace que se le asigne a esa variable el 
  setVehiculos el objeto cada vez que recarga pro 1ra vez */
  

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo vehiculo")
    } else {
      setTextoBoton("Mostrar tabla de vehiculos")

    }
  }, [mostrarTabla]);





  /* En el onClick de mostrar tablaesa vaina de poner el getter y el setter es para hacer una vaina que se llama toggle
  Esto es lo que hace que al dar click en un botón se pueda mostrar o no algo en fubncion de una variable de estado boleano
  si */
  return (
    <div className='flex h-full w-full flex-col items-center justify-start'>
      <div className='flex flex-col items-center justify-center mt-0'>
        <h2 className='text-2xl font-extrabold text-gray-900 mb-3 mt-0'>
          Página de admin de vehiculos
          </h2>

        <button className='bg-gray-400 rounded-full p-2 transform transition duration-500 text-amber-900 hover:scale-110 hover:text-yellow-50' 
        type='button' 
        onClick={() => { setMostrarTabla(!mostrarTabla) }}>{textoBoton}</button>
        {mostrarTabla ?
          <TablaDeVehiculos listaVehiculos ={vehiculos} /> :
          <FormularioCreacionDeVehiculos />
        }

      </div>

    </div>

  )

};

const FormularioCreacionDeVehiculos = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-900 mb-3 mt-0'>Agregar nuevo vehiculo</h2>
      <form className='grid grid-cols-3'>
        <input type="text" className='bg-blue-500 border border-gray-800 rounded-xl p-2 m-2' />
        <input type="text" className='bg-blue-500 border border-gray-800 rounded-xl p-2 m-2' />
        <input type="text" className='bg-blue-500 border border-gray-800 rounded-xl p-2 m-2' />
        <input type="text" className='bg-blue-500 border border-gray-800 rounded-xl p-2 m-2' />
        <input type="text" className='bg-blue-500 border border-gray-800 rounded-xl p-2 m-2' />
        <input type="text" className='bg-blue-500 border border-gray-800 rounded-xl p-2 m-2' />
        <button className='col-span-3 bg-green-200 rounded-full shadow-md hover:bg-green-800 hover:text-orange-50' type='submit'>Guardar vehiculo</button>
      </form>
    </div>
  )
};

const TablaDeVehiculos = ({listaVehiculos}) => {
  useEffect(() => {

    console.log("este es el listado de vehiculos en el componente tabla", listaVehiculos)
  }, [listaVehiculos]);
  


  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-900 mb-3 mt-0'>Tabla de los vehiculos</h2>
      <table className='flex flex-col p-3 text-center'>
        <thead className='p-3'>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody className='p-3'>
          {listaVehiculos.map((listaVehiculos) =>{
            return(
          <tr>
            <td>{listaVehiculos.nombre}</td>
            <td>{listaVehiculos.marca}</td>
            <td>{listaVehiculos.modelo}</td>
          </tr>

            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Vehiculos; 
