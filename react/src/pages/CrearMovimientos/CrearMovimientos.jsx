import React from 'react';

import CrearMovimientos from '../../components/CrearMovimientos/CrearMovimientos';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import TituloPagina from '../../components/TituloPagina/TituloPagina.jsx';

import { useCrearMovimiento } from '../../hooks/useMovimiento.jsx';

const CrearMovimientosPage = () => {

    const { crearMovimiento, cargando } = useCrearMovimiento();

    const manejarCrearMovimiento = async (nuevoMovimiento) => {

        // coge la respuesta de la API
        const respuestaCrearMovimiento = crearMovimiento(nuevoMovimiento);

        // si respuesta de la API, la muestra por la consola
        if (respuestaCrearMovimiento) {
            console.log(respuestaCrearMovimiento);
        }
    }

    return (
        <div>
            <TituloPagina nombre='movimientos'/>
            <Breadcrumbs />
            <CrearMovimientos manejarCrearMovimiento={manejarCrearMovimiento} cargando={cargando} />
        </div>
    );
}

export default CrearMovimientosPage;
