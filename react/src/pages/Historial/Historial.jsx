import React from 'react';
import FiltrarHistorial from "../../components/FiltrarHistorialForm/FiltrarHistorialForm";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const HistorialPage = () => {
    return (
        <div>
            <h2>Bienvenido a Historial</h2>
            <p>Este es el contenido de la página Historial.</p>
            <Breadcrumbs/>
            <FiltrarHistorial/>
        </div>
    );
};

export default HistorialPage;