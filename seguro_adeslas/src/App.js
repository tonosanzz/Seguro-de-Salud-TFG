//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InicioSesionDni from './iniciodesesion/dni';
import InicioSesionPoliza from './iniciodesesion/poliza';
import Errores from './Error';
import Usuario from './paginausuario/vital';
import React, { useState } from 'react';
import { loadUser, saveUser } from './useStorage';

function App() {

  const [user, setUser] = useState(null);

  const actualizarUser = (user) => {
    setUser(user);
    saveUser(user);
  };
  
  return (
    <Routes>
      <Route path='/' element={<InicioSesionDni actualizarUser={actualizarUser}/>} />
      <Route path='/iniciodesesion/dni' element={<InicioSesionDni actualizarUser={actualizarUser}/>} />
      <Route path='/iniciodesesion/poliza' element={<InicioSesionPoliza actualizarUser={actualizarUser}/>} />
      <Route path='/paginausuario/vital' element={<Usuario/>} />
      <Route path='/*' element={<Errores user={user} />} />
    </Routes>
    
  );
}

export default App;
