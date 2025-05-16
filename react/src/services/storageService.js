const API_URL = import.meta.env.VITE_API_URL;
const PRIVATE_STORAGE_URL = API_URL + '/storage/private';

export const getPrivateArchivo = (tabla, columna, archivo) => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(`${PRIVATE_STORAGE_URL}/${tabla}/${columna}/${archivo}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => {
            // respuesta de la API
            return response.blob(); // blob para archivos como imágenes, pdfs, etc.
        })
        .then(blob => {
            // genera la url
            const url = URL.createObjectURL(blob);
            return url;
        })
        .catch(error => {
            console.error('Error en getPrivateArchivo:', error);
            return 0;
        });
}
