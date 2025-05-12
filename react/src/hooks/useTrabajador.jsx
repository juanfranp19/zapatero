import { useState } from 'react';
import { postTrabajador } from '../services/trabajadorService';

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
