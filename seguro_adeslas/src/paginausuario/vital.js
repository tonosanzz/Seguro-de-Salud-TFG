import React from 'react';
import { Link } from 'react-router-dom';
import './vital.css';

const Vital = () => {
    return (
        <div>

            <h1>Bienvenido al chatbot de Adeslas</h1>
            
            <div className="button-container" >

            <iframe 
                src="https://copilotstudio.microsoft.com/environments/cbd3a541-d558-e37c-9c34-47f65cc82e0a/bots/cr773_seguroEstudiantesAdeslas/webchat?__version__=2" 
                frameBorder="0" 
                style={{ width: '450px', height: '1000px' }} 
            />

            </div>
        </div>
    );
};

export default Vital;