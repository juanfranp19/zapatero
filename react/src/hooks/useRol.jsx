import { useEffect, useState } from 'react';
import { getRoles } from '../services/rolService';

// obtener todos los roles
export const useGetRoles = () => {

    const [roles, setRoles] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerRoles = async () => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getRoles();
            console.log(data);
            // mete los datos del servicio al estado
            setRoles(data);

        } catch (error) {
            console.error('error al obtener los roles:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerRoles()
    }, []);

    return ({ roles, cargando });
}
