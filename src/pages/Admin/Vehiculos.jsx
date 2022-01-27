import React, { useEffect, useState } from 'react';

const Vehiculos = () => {

  const [edad, setEdad] = useState(0);
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false)
  const [mostrarCamposAdicionales, setmostrarCamposAdicionales] = useState(false)


  useEffect(() => {
    if (edad >= 18) {
      setEsMenorDeEdad(false)
    } else {
      setEsMenorDeEdad(true)
    }

  }, [edad])



  /*realizar un formulario que le pida al usuario la edad
  y decir si es mayor de edad o no*/

  return (
    <div>
      <form className='flex flex-col'>
        <h2>Forulario de creaciónd e vehículos</h2>
        <label htmlFor="edad">

          Por favor ingres su edad:
        </label>
          <input value={edad}
            onChange={(e) => {
              setEdad(e.target.value)
            }} className="border border-gray-700" name='edad' type='number' />
          {/* renderización condicional así se hace lo vas a */}
          <div className='flex flex-col m-5 bg-blue-400 rounded-xl p-2'>
            {
              esMenorDeEdad ? (
                <span className='text-3xl text-red-600'>¡Usted es menor de edad, no puede hacer pagos!</span>
              ) : (

                <span className='text-3xl text-green-600'>¡Usted es mayor de edad, puede hacer pagos!</span>
              )
            }
          </div>
          <button type='button' onClick={()=> setmostrarCamposAdicionales(true)} className='p-2 bg-blue-900 text-orange-50 items-center justify-center'>
            Mostrar campo adicionales
          </button>
          {mostrarCamposAdicionales && (
            <div>
              <input className='border bg-gray-700 p-3' placeholder='inserte' type='text'/>
              <input className='border bg-gray-700 p-3' placeholder='inserte' type='text'/>
              <input className='border bg-gray-700 p-3' placeholder='inserte' type='text'/>
              <input className='border bg-gray-700 p-3' placeholder='inserte' type='text'/>
            </div>
          )}

      </form>
    </div>
  )
};

export default Vehiculos;
