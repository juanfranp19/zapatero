import React from 'react';
import Mapa from "../../components/Mapa/Mapa.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

const MapaPage = () => {
    return (
        <div>

            <TituloPagina nombre="Mapa"/>

            <Breadcrumbs/>

            <Mapa/>
        </div>
    );
};

export default MapaPage;
