import { createContext, useContext } from 'react';

export const DarkModeContext = createContext(null);

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
/* Este es nuestro primer hook personalizado, así se hacen. Cómo la ve? */