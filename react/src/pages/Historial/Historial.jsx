import React from 'react';
import FiltrarHistorial from "../../components/FiltrarHistorialForm/FiltrarHistorialForm";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const HistorialPage = () => {
    return (
        <div>
            <h2>Bienvenido a Equipos</h2>
            <p>Este es el contenido de la página Equipos.</p>
            <FiltrarHistorial/>
        </div>
    );
};

export default HistorialPage;