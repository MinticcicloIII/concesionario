import React, { useEffect, useState } from 'react';

const Vehiculos = () => {

  const [nombreVehiculo, setNombreVehiculo] = useState('');


  // const [nombreVehiculo, setNombreVehiculo] = useState('Este es el valor inicial');

  /* De esta manera puedo meter valores iniciales en el input (junto con el value que esta más abajo - Línea 60ypico) */
  /* Pero si no quiero un valor inicial meto el codigo de la linea 5 y ya (y sin el value) */






  useEffect(() => {
    console.log('Hola, soy un use effect que se ejecuta una vez por primera vez carga')
  }, []);

  /* Esto se va a ejecutar cuando las variables dentro de las llaves (array de dependencias) cambien  */
  /*cuando las llaves están vacias se ejecuta solo la primera vez. Es útil por ejemplo apra traer bases de datos por primer vez se carga la página*/

  useEffect(() => {
    console.log('Este es un use effect cada vez que cambia  el valor de nombreVehiculo')
    console.log('El valor de la variable es, ', nombreVehiculo)
  }, [nombreVehiculo]);

  /* Etse useEffect se ejecuta cada vez que la variable nombreVehiculo cambia. Está cambiando gracias al onChange con setNombredeVehiuclo */
  /* Los recomensable es usar la variable nombreVehiculo para el useEffect, y el setNombreVehiculo para el onchange  */


  /*   const cambioDeNombre = (e) => {
      console.log('Nombre: ', e.target.value);
    }; */
  /*para poder recibir lo que sale de un input se utiliza el onChange, y a ese OnChange se le mete una función, y con esa función se hace algo*/
  /*En cambioDeNombre se recibe ele evento. Normalmente se le pone e */

  const cambioDeMarca = (e) => {
    console.log('Marca: ', e.target.value);
  };

  const enviarDatosAlBackend =() =>{
    console.log('El valor de la variable es: ', nombreVehiculo)
  }

  /*PEEEEEERo. Habitualmente uno mete las arrow function dentro de los inputs Pille: (Hace exactemente lo mismo*/

  return (
    <div>
      <form className='flex flex-col'>
        <h2>formulario de creación de vehículos</h2>

        {/* <input onChange={(e) => {
          console.log('Nombre: ', e.target.value);
        }} type='text' placeholder='Nombre del vechículo' /> */}

        {/*Yo no quiero que se imprima en consola, quiero que se agregue a la variable steNombredeVehiculo
        entonces pille */}

        <input onChange={(e) => {
          setNombreVehiculo(e.target.value);
        }} 
        // value={nombreVehiculo} 
        type='text' placeholder='Nombre del vechículo' />

        <input onChange={cambioDeMarca} type='text' placeholder='Marca del vehículo' />
        <input type='text' placeholder='Nombre del vehículo' />
        <button type='button' onClick={enviarDatosAlBackend} className='bg-blue-400 text-gray-700 '>Enviar datos</button>
        {/*Al aprecer hay que poner el type ='button' antes para que funcione el onClick*/}
      </form>
    </div>
  )
};

export default Vehiculos;
