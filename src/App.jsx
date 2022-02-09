import React, {useEffect, useState} from "react";
import AuthLayout from "layouts/AuthLayout";
import PrivateLayouts from "layouts/PrivateLayouts";
import PublicLayout from "layouts/PublicLayout";
import Admin from "pages/Admin/Index";
import Clientes from "pages/Admin/Clientes";
import Vehiculos from "pages/Admin/Vehiculos";
import Index from "pages/Index";
import Login from "pages/Login";
import Registro from "pages/Registro";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './styles/App.css';
import { DarkModeContext} from 'context/DarkMode'

function App() {
  const [darkMode, setDarkMode] = useState(false);
/* Podemos usar la variables de DarkModeContext en toda la app */
useEffect(() => {
  console.log('modo dark:', darkMode);
}, [darkMode]);

  return (

    <div className="App">
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateLayouts />} >
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/vehiculos" element={<Vehiculos />} />
              <Route path="/admin/clientes" element={<Clientes />} />
            </Route>
            <Route path="/" element={<AuthLayout />} >
              <Route path="/registro" element={<Registro />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<PublicLayout />} >
              <Route index element={<Index />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
