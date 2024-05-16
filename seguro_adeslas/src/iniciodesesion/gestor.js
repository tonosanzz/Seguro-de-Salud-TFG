import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './gestor.css';

const Gestor = () => {
    const [loginInfo, setLoginInfo] = useState({
        name: '',
        password: '' 
    });
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/iniciodesesion/host', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('../paginausuario/host');
            } else {
                throw new Error(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error(error.message);
            setError(true);
        }
    };

    return (
        <div>
            <div className="button-container">
                <h2 id="titulo">Acceso a la página del Gestor</h2>
                {error && <p>Credenciales incorrectas</p>}
                <div id="caja">
                    <h3 id="inicia">Inicia sesión</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input
                                type="text"
                                id="usuario"
                                name="name"
                                value={loginInfo.name}
                                onChange={handleChange}
                                placeholder="Usuario"
                                required
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={loginInfo.password}
                                onChange={handleChange}
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        <button id="iniciasesion" type="submit">
                            Iniciar sesión
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Gestor;

