import { useEffect, useState } from 'react';
import { getSocios, postTrabajador } from '../services/trabajadorService';

export const useGetTrabajadores = () => {

    const [trabajadores, setTrabajadores] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerTrabajadores = async () => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getSocios();
            console.log(data);
            // mete los datos del servicio al estado
            setTrabajadores(data);

        } catch (error) {
            console.error('error al obtener los trabajadores:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerTrabajadores()
    }, []);

    return ({ trabajadores, cargando });
}

export const useCrearTrabajador = () => {

    const [cargando, setCargando] = useState(false);

    const crearTrabajador = async (formData) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio
            const dataService = await postTrabajador(formData);

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

    return ({ crearTrabajador, cargando });
}
