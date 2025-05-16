const API_URL = import.meta.env.VITE_API_URL;
const API_URL_USERS = API_URL + '/api/v1/users';

export const getUser = (id) => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(`${API_URL_USERS}/${id}`, {
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
            // el usuario
            return data.data;
        })
        .catch(error => {
            console.error('Error en getUser:', error);
            return 0;
        });
}
