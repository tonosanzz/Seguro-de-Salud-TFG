import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './extra.css';
import icono_usuario from '../images/icono_usuario.png';

const Plena = () => {
    const location = useLocation();
    console.log('Location object:', location);  // Esto te mostrará todo el objeto de ubicación

    const passport = location.state?.passport;
    console.log('Passport obtenido:', passport);
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [comment, setComment] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    console.log(passport); 

    const handleRating = async (rate) => {
        setRating(rate);
        setSubmitted(true);
        // Enviar la valoración al backend inmediatamente después de ser seleccionada
        const response = await fetch('api/auth/rating', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ passport: passport, valoracion: rate })  
        });
        if (response.ok) {
            console.log("Valoración enviada correctamente.");
        } else {
            console.error("Error al enviar valoración.");
        }
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmitComment = async () => {
        const data = { passport: passport, comentarios: comment }; // Asegúrate de que este campo coincide con el modelo
        const response = await fetch('api/auth/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log("Comentario enviado correctamente.");
            setComment(''); // Limpiar comentario después de enviar
        } else {
            console.error("Error al enviar comentario.");
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <div className="upper-container">
                <h1 id="titulo1">Bienvenido al chatbot de la Aseguradora</h1>
                <div className="user-icon" onClick={toggleMenu}>
                    <img src={icono_usuario} alt="User" />
                    {showMenu && (
                        <div className="dropdown-menu">
                            <div className="menu-content">
                                <img src={icono_usuario} alt="User" className="menu-user-image"/>
                                <Link to="/iniciodesesion/dni">Cerrar sesión</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="content-container">
                <div className="chatbot">
                <iframe src="https://web.powerva.microsoft.com/environments/Default-89248974-515e-4d65-9469-ab424abfd2d2/bots/cr767_seguroPrimera/webchat?__version__=2"
            frameBorder="0"
            style={{ width: '350px', height: '500px' }} 
            title="2"
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
                                <input className="comment-input" placeholder="Escribe tu comentario aquí" value={comment} onChange={handleCommentChange} />
                                <button id="enviar" onClick={handleSubmitComment}>Enviar</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Plena;

<iframe src="https://web.powerva.microsoft.com/environments/Default-89248974-515e-4d65-9469-ab424abfd2d2/bots/cr767_seguroPrimera/webchat?__version__=2"
            frameBorder="0"
            style={{ width: '350px', height: '500px' }} 
            />