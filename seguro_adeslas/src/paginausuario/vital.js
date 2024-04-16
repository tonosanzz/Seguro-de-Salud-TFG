import React from 'react';
import { Link } from 'react-router-dom';

const Usuario = () => {
    return (
        <div>

            <h1>Bienvenido al chatbot de Adeslas</h1>
            <p>Selecciona una opción:</p>
            <div className="button-container" >

                <Link to='/usuario/quienessomos'>
                    <button className= "boton1" >¿Quiénes somos?</button>
                </Link>
                <br />
                <Link to='/usuario/mapa'>
                    <button className= "boton2" >Mapa</button>
                </Link>
                <br />
                <Link to='/usuario/ayuda'>
                    <button className= "boton3" >Ayuda</button>
                </Link>
                <br />
                <Link to='/usuario/misreservas'>
                    <button className= "boton4" >Mis Reservas</button>
                </Link>
            </div>
        </div>
    );
};

export default Usuario;