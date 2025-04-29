import React from 'react';
import CrearUsuarios from "../../components/CrearUsuarios/CrearUsuarios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearUsuariosPage = () => {
    return (
        <div>
            <TituloPagina nombre="Usuarios"/>
            <Breadcrumbs/>
            <CrearUsuarios/>
        </div>
    );
};

export default CrearUsuariosPage;