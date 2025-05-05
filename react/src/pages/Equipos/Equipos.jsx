import React from 'react';
import FiltrarEquipos from "../../components/FiltrarEquiposForm/FiltrarEquiposForm";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

const EquiposPage = () => {
    return (
        <div>

            <TituloPagina nombre="Equipos"/>

            <Breadcrumbs/>

            <Link to="/equipos/crear" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Equipo </span>
            </Link>

            <FiltrarEquipos/>
        </div>
    );
};

export default EquiposPage;
