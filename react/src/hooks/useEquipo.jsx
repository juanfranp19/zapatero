import { useState } from 'react';
import { postEquipo } from '../services/equipoService';

export const useCrearEquipo = () => {

    const [cargando, setCargando] = useState();

    const crearEquipo = async (formData) => {

        setCargando(true);

        try {

            // recoge los datos devueltor por el servicio de Login
            const dataService = await postEquipo(formData);

            // devuelve los datos recividos del servicio
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
