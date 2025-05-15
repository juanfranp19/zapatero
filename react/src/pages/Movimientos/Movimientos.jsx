import React from 'react';
import FiltrarMovimientos from "../../components/FiltrarMovimientosForm/FiltrarMovimientosForm.jsx";
import { Link } from 'react-router-dom';  // para poner algun tipo de enlace
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

const MovimientosPage = () => {
    return (
        <div>

            <TituloPagina nombre="Movimientos"/>

            <Breadcrumbs/>

            <Link to="/movimientos/crear" className="btn btn-circle btn-default">
                <i className="fa fa-plus"></i>
                <span className="hidden-480"> Crear Movimientos </span>
            </Link>

            <FiltrarMovimientos/>
        </div>
    );
};

export default MovimientosPage;
