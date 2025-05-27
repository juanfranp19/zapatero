import { useNavigate } from 'react-router-dom';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CrearAviso from '../../components/CrearAviso/CrearAviso';
import TituloPagina from '../../components/TituloPagina/TituloPagina';

import { useCrearAviso } from '../../hooks/useAviso';

const CrearAvisoPage = () => {

    const navigateTo = useNavigate();
    const { crearAviso, cargando } = useCrearAviso();

    const manejarCrearAviso = async (nuevoAviso) => {

        // coge la respuesta de la API
        const respuestaCrearAviso = await crearAviso(nuevoAviso);

        // manda la respuesta de la API
        if (respuestaCrearAviso) {
            console.log(respuestaCrearAviso);

            navigateTo('/avisos');
        }
    }

    return (
        <div>
            <TituloPagina nombre='Avisos' />
            <Breadcrumbs />

            <CrearAviso manejarCrearAviso={manejarCrearAviso} cargando={cargando} />
        </div>
    );
}

export default CrearAvisoPage;
