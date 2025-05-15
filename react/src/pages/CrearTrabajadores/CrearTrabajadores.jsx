import React from 'react';

import CrearTrabajadores from "../../components/CrearTrabajadores/CrearTrabajadores.jsx";
import CrearUser from "../../components/CrearUser/CrearUser.jsx";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import TituloPagina from "../../components/TituloPagina/TituloPagina.jsx";

import { useCrearTrabajador } from '../../hooks/useTrabajador.jsx';
import { useAuth } from '../../hooks/useAuth';

const CrearUsuariosPage = () => {

    const { crearTrabajador, cargando } = useCrearTrabajador();
    const { register } = useAuth();

    const manejarCrearTrabajador = async (nuevoTrabajador) => {

        // coge la respuesta de la API
        const respuestaCrearTrabajador = await crearTrabajador(nuevoTrabajador);

        // muestra la respuesta de la API por la consola
        if (respuestaCrearTrabajador) {
            console.log(respuestaCrearTrabajador);

            // recarga página para que cuando rellena después el form de crear user, aparezca el trabajador que acaba de crear, a los 3 segundos
            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    const manejarCrearUser = async (nuevoUser) => {

        // coge la respuesta de la API
        const respuestaCrearUser = await register(nuevoUser);

        // muestra la respuesta de la API por la consola
        if (respuestaCrearUser) {
            console.log(respuestaCrearUser);

            // recarga página para que cuando rellena después el form de crear user, no aparezca el trabajador del usuario que acaba de crear, a los 3 segundo
            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    return (
        <div>
            <TituloPagina nombre="trabajadores"/>
            <Breadcrumbs/>

            <CrearTrabajadores manejarCrearTrabajador={manejarCrearTrabajador} cargando={cargando} />
            <CrearUser manejarCrearUser={manejarCrearUser} />
        </div>
    );
};

export default CrearUsuariosPage;
