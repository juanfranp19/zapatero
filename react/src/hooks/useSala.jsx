import { useState, useEffect } from 'react';
import { getSalas } from '../services/salaService';

// obtener todos las salas
export const useGetSalas = () => {

    const [salas, setSalas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const obtenerSalas = async () => {

        // empieza a cargar
        setCargando(true);
        setError(null);

        try {

            // obtiene los datos del servicio
            const data = await getSalas();
            console.log(data);
            // mete los datos al estado
            setSalas(data);

        } catch (error) {
            console.error('error al obtener las salas:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerSalas()
    }, []);

    return ({ salas, cargando, error });
}
