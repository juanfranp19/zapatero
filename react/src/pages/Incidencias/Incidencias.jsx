import React from 'react';
import FiltrarIncidencias from "../../components/FiltrarIncidenciasForm/FiltrarIncidenciasForm";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const IncidenciasPage = () => {
    return (
        <div>
            <h2>Bienvenido a Incidencias</h2>
            <p>Este es el contenido de la página Incidencias.</p>

            <Breadcrumbs/>

            <FiltrarIncidencias/>
        </div>
    );
};

export default IncidenciasPage;