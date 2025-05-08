import React from 'react';
import FiltrarUsuarios from "../../components/FiltrarUsuariosForm/FiltrarUsuariosForm.jsx";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
const UsuariosPage = () => {
    return (
        <div>

            <TituloPagina nombre="trabajadores"/>

            <Breadcrumbs/>

            <Link to="crear" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Trabajador </span>
            </Link>

            <FiltrarUsuarios/>
        </div>
    );
};

export default UsuariosPage;
