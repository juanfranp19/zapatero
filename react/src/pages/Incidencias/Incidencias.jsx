import React from 'react';
import FiltrarIncidencias from "../../components/FiltrarIncidenciasForm/FiltrarIncidenciasForm";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const IncidenciasPage = () => {
    return (
        <div>

            <TituloPagina nombre="Incidencias"/>

            <Breadcrumbs/>

            <FiltrarIncidencias/>
        </div>
    );
};

export default IncidenciasPage;