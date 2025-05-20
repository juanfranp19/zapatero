import { useEffect, useState } from 'react';
import { getMovimientos, postMovimiento } from '../services/movimientoService';

export const useCrearMovimiento = () => {

    const [cargando, setCargando] = useState(false);

    const crearMovimiento = async (formData) => {

        // empieza a cargar
        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio
            const dataService = await postMovimiento(formData);

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

    return ({ crearMovimiento, cargando });
}

export const useGetMovimientos = () => {

    const [movimientos, setMovimientos] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerMovimientos = async () => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getMovimientos();
            console.log(data);
            // mete los datos del servicio al estado
            setMovimientos(data);

        } catch (error) {
            console.error('error al obtener los movimientos:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerMovimientos()
    }, []);

    return ({ movimientos, cargando });
}