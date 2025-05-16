import { useEffect, useState } from 'react';
import { getTrabajadores, postTrabajador, getTrabajador } from '../services/trabajadorService';

export const useGetTrabajadores = () => {

    const [trabajadores, setTrabajadores] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerTrabajadores = async () => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getTrabajadores();
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

export const useGetTrabajador = (id) => {

    const [trabajador, setTrabajador] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerTrabajador = async (id) => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getTrabajador(id);
            console.log(data);
            // mete los datos del servicio al estado
            setTrabajador(data);

        } catch (error) {
            console.error('error al obtener el trabajador:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        if (id) obtenerTrabajador(id);
    }, [id]);

    return ({ trabajador, cargando });
}
