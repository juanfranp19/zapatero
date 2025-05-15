import { useState } from 'react';
import { postMovimiento } from '../services/movimientoService';

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
