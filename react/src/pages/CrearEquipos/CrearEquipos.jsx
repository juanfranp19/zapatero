import React from 'react';
import CrearEquipos from "../../components/CrearEquipos/CrearEquipos";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

import { useCrearEquipo } from '../../hooks/useEquipo.jsx';

const CrearEquiposPage = () => {

    const { crearEquipo, cargando } = useCrearEquipo();

    const manejarCrearEquipo = async (nuevoEquipo) => {

        // coge la respuesta de la API
        const respuestaCrearEquipo = await crearEquipo(nuevoEquipo);

        // manda la respuesta de la API
        if (respuestaCrearEquipo) {
            console.log(respuestaCrearEquipo);
        }
    }

    return (
        <div>
            <TituloPagina nombre="Equipos"/>
            <Breadcrumbs/>
            <CrearEquipos manejarCrearEquipo={manejarCrearEquipo} cargando={cargando} />
        </div>
    );
};

export default CrearEquiposPage;
