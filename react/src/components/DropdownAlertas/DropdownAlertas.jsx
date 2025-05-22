import { useEffect, useState } from 'react';
import ListaAlertasSinLeer from '../ListaAlertasSinLeer/ListaAlertasSinLeer';

import { useAuth } from '../../hooks/useAuth';
import { useGetUser } from '../../hooks/useUser';

import './DropdownAlertas.css';

const DropdownAlertas = () => {

    const { user: userAuth } = useAuth();
    const { user: userGetUser, cargando } = useGetUser(userAuth?.id);

    const [countAvisos, setCountAvisos] = useState(0);

    console.log('count ', userGetUser?.avisos_users?.length);

    function obtenerNumeroAvisos() {

        {/* cuando hayan cargado los datos se guardarán en el estado */}
        if (Array.isArray(userGetUser?.avisos_users)) {
            setCountAvisos(userGetUser?.avisos_users?.filter((aviso) => !aviso?.pivot?.leido).length);
        } else {
            setCountAvisos('...');
        }
    }

    useEffect(() => {
        obtenerNumeroAvisos();
    }, [userGetUser]);

    return (
        <div className='row'>
            <div className='dropdownalertas col-12'>
                {/* icono de la campana */}
                <a className='nav-link' href='#' role='button' data-bs-toggle='dropdown'>
                    <i className='bi bi-bell' />
                    <span className='num-alertas'>{countAvisos}</span>
                </a>

                {/* aparece una vez le des a la campana */}
                <ul className='dropdown-menu'>
                    <ListaAlertasSinLeer />
                </ul>
            </div>
        </div>
    );
}

export default DropdownAlertas;
