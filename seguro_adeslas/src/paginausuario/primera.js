import React from 'react';
import { Link } from 'react-router-dom';
import './primera.css';

const Primera = () => {
    return (
        <div>

            <h1 id="titulo">Bienvenido al chatbot de la Aseguradora</h1>
            
            <div className="button-container" >

            <iframe src="https://web.powerva.microsoft.com/environments/Default-89248974-515e-4d65-9469-ab424abfd2d2/bots/cr767_seguroPlena/webchat?__version__=2" 
            frameBorder="0"
            style={{ width: '350px', height: '500px' }} 
            />
            

            </div>
        </div>
    );
};

export default Primera;