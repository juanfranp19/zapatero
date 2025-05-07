import { useEffect, useState } from 'react';
import { getTiposEquipos } from '../services/tipoEquipoService';

// obtener todos los tipos de equipo
export const useGetTiposEquipo = () => {

    const [tiposEquipo, setTiposEquipo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const obtenerTiposEquipo = async () => {

        // epieza a cargar
        setLoading(true);
        setError(null);

        try {

            // obtiene los datos del servicio
            const data = await getTiposEquipos();
            console.log(data);
            // mete los datos del servicio al estado
            setTiposEquipo(data);

        } catch (error) {
            console.error('error al obtener los tipos de equipo:', error);
        } finally {
            // termina de cargar
            setLoading(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        obtenerTiposEquipo()
    }, []);

    return ({ tiposEquipo, loading, error });
}
