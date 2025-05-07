const API_URL = import.meta.env.VITE_API_URL;
const API_URL_SALAS = API_URL + '/api/v1/salas';

export const getSalas = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // hace la petición a la API
    return fetch(API_URL_SALAS, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => {
            // respuesta de la API
            return response.json();
        })
        .then((data) => {
            // las salas
            return data.data;
        })
        .catch(error => {
            console.error('Error en getSalas:', error);
            return 0;
        });
}
