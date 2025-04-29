import React from 'react';
import FiltrarPermisos from "../../components/FiltrarPermisosForm/FiltrarPermisosForm";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

const PermisosPage = () => {
    return (
        <div>

            <TituloPagina nombre="Permisos"/>

            <Breadcrumbs/>

            <Link to="/permisos/crear" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Permiso </span>
            </Link>

            <FiltrarPermisos/>
        </div>
    );
};

export default PermisosPage;