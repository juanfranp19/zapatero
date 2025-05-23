import { useEffect, useState } from 'react';
import { getAvisos, putAviso, deleteAviso } from '../services/avisoService';

export const useGetAvisos = () => {

    const [avisos, setAvisos] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerAvisos = async () => {

        // empieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getAvisos();
            console.log(data);
            // mete los datos del servicio al estado
            setAvisos(data);

        } catch (error) {
            console.error('error al obtener los avisos:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerAvisos()
    }, []);

    return ({ avisos, cargando });
}

export const useActualizarAviso = () => {

    const [cargando, setCargando] = useState(false);

    const actualizarAviso = async (formData, id) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltos por el servicio
            const dataService = await putAviso(formData, id);

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

    return ({ actualizarAviso, cargando });
}

export const useDeleteAviso = () => {

    const [cargando, setCargando] = useState(false);

    const eliminarAviso = async (id) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltos por el servicio
            const dataService = await deleteAviso(id);

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

    return ({ eliminarAviso, cargando });
}
