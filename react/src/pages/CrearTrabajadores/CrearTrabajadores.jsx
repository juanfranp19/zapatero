import React from 'react';
import CrearTrabajadores from "../../components/CrearTrabajadores/CrearTrabajadores.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearUsuariosPage = () => {
    return (
        <div>
            <TituloPagina nombre="trabajadores"/>
            <Breadcrumbs/>
            <CrearTrabajadores/>
        </div>
    );
};

export default CrearUsuariosPage;
