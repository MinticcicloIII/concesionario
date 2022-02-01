import { useDarkMode } from 'context/DarkMode';
import React from 'react';

const Index = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`flex h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      Landing del concesionario
    </div>
  );
};

export default Index;
