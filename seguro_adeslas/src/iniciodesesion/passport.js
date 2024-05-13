import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../images/logo.png';
import './passport.css';
import { useNavigate } from 'react-router-dom';
import icono_adeslas from '../images/icono_adeslas.png';





const InicioSesionPassport = (props ) => {
  
  const [loginInfo, setLoginInfo] = useState({
    passport: '',
    
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/iniciodesesion/passport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      const data = await response.json();

      if (response.ok) {
        // Redireccionar al usuario según el tipo de seguro
        switch (data.seguro) {
          case 'plena':
            navigate('../paginausuario/plena', { state: { passport: data.passport } });
            break;
          case 'primera':
            navigate('../paginausuario/primera', { state: { passport: data.passport } });
            break;
          case 'extra':
            navigate('../paginausuario/extra', { state: { passport: data.passport } });
            break;
          case 'host':
            navigate('../paginausuario/host');
            break;
          default:
            console.error('Tipo de seguro no reconocido');
        }
      } else {
        throw new Error(data.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error(error.message);
      setError(true);
      // Manejar el error aquí (mostrar un mensaje al usuario, etc.)
    }
  };

  return (
    <div>
      
      <div className="button-container">
        <h2 id="titulo">Accede al Chatbot de la Aseguradora</h2>
        {error && <p>Credenciales incorrectas</p>}
        <br />
        
        <div id="caja">
        <h3 id="inicia">Inicia sesión</h3>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
            <input
              type="text"
              name="passport"
              id="passport"
              value={loginInfo.poliza}
              onChange={handleChange}
              placeholder="Pasaporte"
              required
            />
            </div>
            <button id="iniciasesion" type="submit">
              Iniciar sesión
            </button>
          </form>
        
      
        <p>
        <Link id="dni" to="/iniciodesesion/dni">
            Iniciar sesión con el número de DNI
        </Link>
        </p>
        <br/>
        <p>
        <div>
            <a href="https://www.segurcaixaadeslas.es/particulares/encuentra-tu-seguro" target="_blank" id="seguros" >Ver todos los seguros de Salud</a>
        </div>
          </p>
      </div>
    </div>
    </div>
  );
};

export default InicioSesionPassport;
