import { useEffect, useState } from 'react';
import { postUso, getUso, putUso } from '../services/usoService';

export const useCrearUso = () => {

    const [cargando, setCargando] = useState(false);

    const crearUso = async (formData) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio
            const dataService = await postUso(formData);

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

    return ({ crearUso, cargando });
}

export const useGetUso = (id) => {

    const [uso, setUso] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerUso = async (id) => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getUso(id);
            console.log(data);
            // mete los datos del servicio al estado
            setUso(data);

        } catch (error) {
            console.error('error al obtener el uso:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        if (id) obtenerUso(id);
    }, [id]);

    return ({ uso, cargando });
}

export const useActualizarUso = () => {

    const [cargando, setCargando] = useState(false);

    const actualizarUso = async (formData, id) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio
            const dataService = await putUso(formData, id);

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

    return ({ actualizarUso, cargando });
}
