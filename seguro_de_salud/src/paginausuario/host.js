import React, { useState, useEffect } from 'react';
import './host.css'; 

const Host = () => {
    const [valoraciones, setValoraciones] = useState([]);

    useEffect(() => {
        const fetchValoraciones = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/valoraciones');
                const data = await response.json();
                setValoraciones(data);
            } catch (error) {
                console.error("Error al cargar las valoraciones:", error);
            }
        };

        fetchValoraciones();
    }, []);

    return (
        <div className="container">
            <div className="upper-container">
            <h1 id="titulo1">Valoraciones de Clientes</h1>
            </div>
        
            <ul>
                {valoraciones.map((valoracion, index) => (
                    <li key={index} className="valoracion-item">
                        <p><strong>Nombre:</strong> {valoracion.nombre}</p>
                        <p><strong>Seguro:</strong> {valoracion.seguro}</p>
                        <p><strong>Valoración:</strong>
                {valoracion.valoracion > 0 ? 
                    <span className="star-rating">
                        {Array(valoracion.valoracion).fill('★').join('')}
                    </span> 
                    : ""}
                </p>
                        <p><strong>Fecha:</strong> {valoracion.fecha ? new Date(valoracion.fecha).toLocaleString() : ""}</p>
                        <p><strong>Comentario:</strong> {valoracion.comentarios || "Ninguno"}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Host;