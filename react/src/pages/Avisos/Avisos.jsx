import React from 'react';

import FiltrarAvisosForm from '../../components/FiltrarAvisosForm/FiltrarAvisosForm.jsx';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import TituloPagina from '../../components/TituloPagina/TituloPagina.jsx';

import { useDeleteAviso, useActualizarAviso } from '../../hooks/useAviso.jsx';

const AvisosPage = () => {

    const { actualizarAviso, cargando: cargandoActualizarAviso } = useActualizarAviso();
    const { eliminarAviso, cargando: cargandoDeleteAviso } = useDeleteAviso();

    const manejarActualizarAviso = async (avisoActualizado, avisoId) => {

        // coge la respuesta de la API
        const respuestaActualizarAviso = await actualizarAviso(avisoActualizado, avisoId);

        // manda la respuesta de la API
        if (respuestaActualizarAviso) {
            console.log(respuestaActualizarAviso);

            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    const manejarDeleteAviso = async (AvisoId) => {

        // coge la respuesta de la API
        const respuestaDeleteAviso = await eliminarAviso(AvisoId);

        // manda la respuesta de la API
        if (respuestaDeleteAviso) {
            console.log(respuestaDeleteAviso);

            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    return (
        <div>
            <TituloPagina nombre='Avisos'/>
            <Breadcrumbs/>

            <FiltrarAvisosForm
                manejarActualizarAviso={manejarActualizarAviso}
                manejarDeleteAviso={manejarDeleteAviso}
                cargandoActualizarAviso={cargandoActualizarAviso}
                cargandoDeleteAviso={cargandoDeleteAviso}
            />
        </div>
    );
}

export default AvisosPage;
