import React from 'react';
import FiltrarUsos from "../../components/FiltrarUsosForm/FiltrarUsosForm.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";
// import { Link } from 'react-router-dom';  // para poner algun tipo de enlace

const HistorialPage = () => {
    return (
        <div>

            <TituloPagina nombre="Historial"/>

            <Breadcrumbs/>
            <FiltrarUsos/>
        </div>
    );
};

export default HistorialPage;