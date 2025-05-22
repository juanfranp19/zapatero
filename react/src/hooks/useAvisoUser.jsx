import { useEffect, useState } from 'react';
import { putAvisoUser } from '../services/avisoUserService';

export const useActualizarAvisoUser = () => {

    const [cargando, setCargando] = useState(false);

    const actualizarAvisoUser = async (id) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio
            const dataService = await putAvisoUser(id);

            // devuelve los datos recibidos del servicio
            return dataService;

        } catch (error) {

            console.error(error.message);
            return 0;

        } finally {

            // termina la carga
            setCargando(false);
        }
    }

    return ({ actualizarAvisoUser, cargando });
}
