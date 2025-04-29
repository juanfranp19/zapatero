import React from 'react';
import FiltrarPermisos from "../../components/FiltrarPermisosForm/FiltrarPermisosForm";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const PermisosPage = () => {
    return (
        <div>
            <h2>Bienvenido a Permisos</h2>
            <p>Este es el contenido de la página Permisos.</p>

            <Link to="/crear-permiso" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Permiso </span>
            </Link>

            <FiltrarPermisos/>
        </div>
    );
};

export default PermisosPage;