import { useState } from 'react';
import { postUso } from '../services/usoService';

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
