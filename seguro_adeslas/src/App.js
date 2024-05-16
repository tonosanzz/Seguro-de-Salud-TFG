//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InicioSesionDni from './iniciodesesion/dni';
import InicioSesionPassport from './iniciodesesion/passport';
import Gestor from './iniciodesesion/gestor';
import Errores from './Error';
import Plena from './paginausuario/plena';
import Primera from './paginausuario/primera';
import Extra from './paginausuario/extra';
import Host from './paginausuario/host';
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
      <Route path='/iniciodesesion/passport' element={<InicioSesionPassport actualizarUser={actualizarUser}/>} />
      <Route path='/iniciodesesion/gestor' element={<Gestor actualizarUser={actualizarUser}/>} />
      <Route path='/paginausuario/plena' element={<Plena/>} />
      <Route path='/paginausuario/primera' element={<Primera/>} />
      <Route path='/paginausuario/extra' element={<Extra/>} />
      <Route path='/paginausuario/host' element={<Host/>} />
      <Route path='/*' element={<Errores user={user} />} />
    </Routes>
    
  );
}

export default App;
