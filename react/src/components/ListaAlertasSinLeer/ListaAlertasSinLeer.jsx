import { Link } from 'react-router-dom';

import AjaxLoader from '../AjaxLoader/AjaxLoader';
import ButtonLeido from '../ButtonLeido/ButtonLeido';
import IconoAvisos from '../IconoAvisos/IconoAvisos';

import { useAuth } from '../../hooks/useAuth';
import { useActualizarAvisoUser } from '../../hooks/useAvisoUser';
import { useGetUser } from '../../hooks/useUser';

import './ListaAlertasSinLeer.css';

const ListaAlertasSinLeer = () => {

    const { user: userAuth } = useAuth();
    const { user: userGetUser, cargando: cargandoGetUser } = useGetUser(userAuth?.id);
    const { actualizarAvisoUser, cargando: cargandoActualizarAvisoUser } = useActualizarAvisoUser();

    async function marcarComoLeido(avisoid) {

        // le envia los datos con el hook de actualizar
        const actualizar = await actualizarAvisoUser(avisoid);

        // si se ha actualizado con éxtito
        if (actualizar) {

            console.log('aviso marcado como leído con éxito');

            // recarga página a los 3 segundos
            setTimeout(() => {
                window.location.reload();
            }, 300);
        }
    }

    function obtenerAvisos() {

        const avisos = userGetUser?.avisos_users;

        // cuando se haya cargado el array
        if (Array.isArray(avisos)) {

            const listaAvisos = (
                avisos
                    // filtra los avisos con leido 0
                    .filter((aviso) => !aviso?.pivot?.leido)
                    .map((aviso) => (
                        <li key={aviso.id} className='aviso-sin-leer'>
                            <Link to='incidencias'>
                                <IconoAvisos />
                                {aviso.comentario}
                            </Link>
                            <ButtonLeido onClick={() => marcarComoLeido(aviso.id)} />
                        </li>
                    ))
            );

            if (listaAvisos.length <= 0) {
                return <li>No hay avisos sin leer</li>;
            } else {
                return listaAvisos;
            }
        }
    }

    return (
        <>
            {
                cargandoGetUser
                    ? <AjaxLoader />
                    : obtenerAvisos()
            }
        </>
    );
}

export default ListaAlertasSinLeer;
