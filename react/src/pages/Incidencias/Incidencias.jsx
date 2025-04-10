import React from 'react';
import FiltrarIncidencias from "../../components/FiltrarIncidenciasForm/FiltrarIncidenciasForm";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const IncidenciasPage = () => {
    return (
        <div>
            <h2>Bienvenido a Equipos</h2>
            <p>Este es el contenido de la página Equipos.</p>
            <FiltrarIncidencias/>
        </div>
    );
};

export default IncidenciasPage;