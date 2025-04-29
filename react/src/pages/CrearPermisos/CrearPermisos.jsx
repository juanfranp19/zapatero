import React from 'react';
import CrearPermisos from "../../components/CrearPermisos/CrearPermisos";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const CrearPermisosPage = () => {
    return (
        <div>
            <p>Este es el contenido de la página Creacion de Permisos.</p>
            <Breadcrumbs/>
            <CrearPermisos/>
        </div>
    );
};

export default CrearPermisosPage;