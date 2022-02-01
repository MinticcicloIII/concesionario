import { useDarkMode } from 'context/DarkMode';
import React from 'react';


const Admin = () => {
  const { darkMode } = useDarkMode();
  return (
  <div className={`flex h-full w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
    
  </div>);
};

export default Admin;
