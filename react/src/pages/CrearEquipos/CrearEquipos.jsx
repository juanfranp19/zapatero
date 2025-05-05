import React from 'react';
import CrearEquipos from "../../components/CrearEquipos/CrearEquipos";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearEquiposPage = () => {
    return (
        <div>
            <TituloPagina nombre="Equipos"/>
            <Breadcrumbs/>
            <CrearEquipos/>
        </div>
    );
};

export default CrearEquiposPage;