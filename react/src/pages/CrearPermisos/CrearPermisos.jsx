import React from 'react';
import CrearPermisos from "../../components/CrearPermisos/CrearPermisos";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearPermisosPage = () => {
    return (
        <div>
            <TituloPagina nombre="Permisos"/>
            <Breadcrumbs/>
            <CrearPermisos/>
        </div>
    );
};

export default CrearPermisosPage;