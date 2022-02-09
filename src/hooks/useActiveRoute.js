import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const useActiveRoute = (ruta) => {

    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        console.log(location, ruta)
        if (location.pathname.includes(ruta)) {
            /*Acá usamos el includes en vez del === porque entonces no reconces rutas nesteadas o sea dentro de vehiculos puden haber
            maás ruta y el botoncito se deja de indicar */
            setIsActive(true)
        } else {
            setIsActive(false)
        }

    }, [location, ruta]);

    /*   useEffect(() => {
        console.log(isActive,ruta)
      }, [isActive,ruta]); */

      return isActive;

};

export default useActiveRoute;