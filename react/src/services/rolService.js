const API_URL = import.meta.env.VITE_API_URL;
const API_URL_ROLES = API_URL + '/api/v1/roles';

export const getRoles = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(API_URL_ROLES, {
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
            // los roles
            return data.data;
        })
        .catch(error => {
            console.error('Error en getRoles:', error);
            return 0;
        });
}
