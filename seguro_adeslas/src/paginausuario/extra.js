
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './extra.css';

const Extra = () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [comment, setComment] = useState('');
    const [showMenu, setShowMenu] = useState(false);


    const handleRating = (rate) => {
        setRating(rate);
        setSubmitted(true);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);  
    };

    const handleSubmitComment = async () => {
        const data = { comment: comment }; // Suponiendo que tienes el ID del usuario o cualquier otra info necesaria
        const response = await fetch('/api/comment', { // Asegúrate de usar la URL correcta
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    };

    return (
        <div>
            <div className="upper-container">
            <h1 id="titulo1">Bienvenido al chatbot de la Aseguradora</h1>
            <div className="user-icon" onClick={toggleMenu}>
                    <img src="../images/icono_usuario.png" alt="User" />
                    {showMenu && (
                        <div className="dropdown-menu">
                            <Link to="/iniciodesesion/dni">Cerrar sesión</Link>
                        </div>
                    )}
                </div>
            </div>
        <div className="content-container">
            
            <div className="chatbot">
                <iframe src="https://web.powerva.microsoft.com/environments/Default-89248974-515e-4d65-9469-ab424abfd2d2/bots/cr767_seguroExtra/webchat?__version__=2" 
                frameBorder="0"
                style={{ width: '350px', height: '500px' }} 
                />
            </div>
            <div className="feedback">
                <p id="pregunta1">¿Qué te ha parecido el servicio?</p>
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= rating ? "on" : "off"}
                                onClick={() => handleRating(index)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
                {submitted && <p id="gracias">¡Gracias por tu colaboración!</p>}
                {submitted && (
        <>
            <p id="pregunta2">¿Qué le ha parecido el servicio?</p>
            <div className="comment-container">
                    <input className="comment-input" placeholder="Escribe tu comentario aquí"  value={comment} onChange={handleCommentChange} />
                    <button id="enviar" onClick={handleSubmitComment}>Enviar</button>
            </div>
        </>
        )}
                
            </div>
        </div>
        </div>
        
    );
};

export default Extra;
