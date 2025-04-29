import React from 'react';
import FiltrarUsuarios from "../../components/FiltrarUsuariosForm/FiltrarUsuariosForm";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
const UsuariosPage = () => {
    return (
        <div>

            <Breadcrumbs/>

            <Link to="/usuarios/crear" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Usuario </span>
            </Link>

            <FiltrarUsuarios/>
        </div>
    );
};

export default UsuariosPage;
