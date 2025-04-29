import React from 'react';
import CrearUsuarios from "../../components/CrearUsuarios/CrearUsuarios";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearUsuariosPage = () => {
    return (
        <div>
            <Breadcrumbs/>
            <CrearUsuarios/>
        </div>
    );
};

export default CrearUsuariosPage;