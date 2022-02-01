import React from 'react';
import { useDarkMode } from 'context/DarkMode';


const TriggerDarkMode = () => {
    const {darkMode, setDarkMode } = useDarkMode()
    
    return (<div>
        <button type='button' onClick={() => {
            setDarkMode(!darkMode);
        }}>
            {darkMode ? 'Desactivar' : 'Activar'} modo dark
        </button>
    </div>)
};

export default TriggerDarkMode;
