import React from 'react';
import CrearTrabajadores from "../../components/CrearTrabajadores/CrearTrabajadores.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

import { useCrearTrabajador } from '../../hooks/useTrabajador.jsx';

const CrearUsuariosPage = () => {

    const { crearTrabajador, cargando } = useCrearTrabajador();

    const manejarCrearTrabajador = async (nuevoTrabajador) => {

        // coge la respuesta de la API
        const respuestaCrearTrabajador = await crearTrabajador(nuevoTrabajador);

        // muestra la respuesta de la API por la consola
        if (respuestaCrearTrabajador) {
            console.log(respuestaCrearTrabajador);
        }
    }

    return (
        <div>
            <TituloPagina nombre="trabajadores"/>
            <Breadcrumbs/>
            <CrearTrabajadores manejarCrearTrabajador={manejarCrearTrabajador} cargando={cargando} />
        </div>
    );
};

export default CrearUsuariosPage;
