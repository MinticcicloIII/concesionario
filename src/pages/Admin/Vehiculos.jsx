import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Crear  vehículo");
  const [colorBoton, setColorBoton] = useState('red');

  useEffect(() => {
    setVehiculos(vehiculosBackend)

  }, []);

  /* Este useEffect hace que se le asigne a esa variable el 
  setVehiculos el objeto cada vez que recarga pro 1ra vez */


  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo vehiculo");
      setColorBoton('bg-gray-200');
    } else {
      setTextoBoton("Mostrar tabla de vehiculos");
      setColorBoton('bg-gray-700');

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

        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`rounded-full ${colorBoton} bg-gray-700 p-2 text-amber-900 hover:scale-110 hover:text-yellow-50 `}
          type='button'
        >
          {textoBoton}

        </button>




        {mostrarTabla ? (

          <TablaDeVehiculos listaVehiculos={vehiculos} />
        ) : (

          <FormularioCreacionDeVehiculos
            setMostrarTabla={setMostrarTabla}
            setVehiculos={setVehiculos}
            listaVehiculos={vehiculos} />
        )}
        <ToastContainer position="bottom-center" autoClose={5000} />

      </div>

    </div>

  )

};

const FormularioCreacionDeVehiculos = ({ setMostrarTabla, setVehiculos, listaVehiculos }) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current)
    const nuevoVehiculo ={};

    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    })
    setMostrarTabla(true)
    setVehiculos([...listaVehiculos,nuevoVehiculo]);
    toast.success("Vehículo agregado correctamente");


  };

  /* Use siempre esto para formualrios porque no importa cuánto tenga en el formulario este man la coge, no hay ponerse a ponerse 
  a usar estadosni onChange ni onSubmit */
  return (

    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-900 mb-3 mt-0'>Agregar nuevo vehiculo</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor="nombre">
          Nombre del vehiculo
          <input
            name='nombre'
            type="text"
            className='bg-gray-200 border border-gray-800 rounded-xl p-2 m-2'
            placeholder='Corolla'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor="marca">
          Marca del vehiculo
          <select
            name='marca'
            className='bg-gray-200 border border-gray-800 rounded-xl p-2 m-2'
            required
            defaultValue={0}
          >
            <option disabled value={0} >Seleccione una opción</option>
            <option >Renault</option>
            <option >Toyota</option>
            <option >Ford</option>
          </select>
        </label>
        <label className='flex flex-col' htmlFor="modelo">
          Nombre del vehiculo

          <input
            name='modelo'
            type="number"
            max={2022}
            min={1970}
            className='bg-gray-200 border border-gray-800 rounded-xl p-2 m-2'
            placeholder='1992'
            required
          />
        </label>
        <button
          type='submit'
          className='bg-green-200 rounded-full shadow-md hover:bg-green-800 hover:text-orange-50' >
          Guardar vehiculo
        </button>

      </form>
    </div>
  )
};

const TablaDeVehiculos = ({ listaVehiculos }) => {
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
          {listaVehiculos.map((listaVehiculos) => {
            return (
              <tr>
                <td>{listaVehiculos.nombre}</td>;
                <td>{listaVehiculos.marca}</td>;
                <td>{listaVehiculos.modelo}</td>;
              </tr>

            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Vehiculos; 
