import { useEffect, useState } from 'react';
import { getPrivateArchivo } from '../services/storageService';

export const useGetPrivatecArchivo = (tabla, columna, archivo) => {

    const [archivoDevuelto, setArchivoDevuelto] = useState([]);
    const [cargando, setCargando] = useState(false);

    const obtenerArchivo = async (tabla, columna, archivo) => {

        // epieza a cargar
        setCargando(true);

        try {

            // obtiene los datos del servicio
            const data = await getPrivateArchivo(tabla, columna, archivo);
            console.log(data);
            // mete los datos del servicio al estado
            setArchivoDevuelto(data);

        } catch (error) {
            console.error('error al obtener el archivo privado:', error);
        } finally {
            // termina de cargar
            setCargando(false);
        }
    }

    // ejecuta la función
    useEffect(() => {
        if (tabla && columna && archivo) obtenerArchivo(tabla, columna, archivo);
    }, [tabla, columna, archivo]);

    return ({ archivoDevuelto, cargando });
}
