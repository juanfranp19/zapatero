import { useEffect, useState } from 'react';
import { getUser } from '../services/userService';

export const useGetUser = (id) => {

    const [user, setUser] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerUser = async (id) => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getUser(id);
            console.log(data);
            // mete los datos del servicio al estado
            setUser(data);

        } catch (error) {
            console.error('error al obtener el user:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        if (id) obtenerUser(id);
    }, [id]);

    return ({ user, cargando });
}
