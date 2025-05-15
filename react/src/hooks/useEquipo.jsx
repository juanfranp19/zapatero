import { useEffect, useState } from 'react';
import { getEquipos, postEquipo } from '../services/equipoService';

export const useGetEquipos = () => {

    const [equipos, setEquipos] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerEquipos = async () => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getEquipos();
            console.log(data);
            // mete los datos del servicio al estado
            setEquipos(data);

        } catch (error) {
            console.error('error al obtener los equipos:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerEquipos()
    }, []);

    return ({ equipos, cargando });
}

export const useCrearEquipo = () => {

    const [cargando, setCargando] = useState();

    const crearEquipo = async (formData) => {

        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio
            const dataService = await postEquipo(formData);

            // devuelve los datos recibidos del servicio
            return dataService;

        } catch (error) {

            console.error(error.message);
            return 0;

        } finally {

            setCargando(false);
        }
    }

    return ({ crearEquipo, cargando });
}
