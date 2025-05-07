const API_URL = import.meta.env.VITE_API_URL;
const API_URL_TIPOS_EQUIPO = API_URL + '/api/v1/tipos_equipo';

export const getTiposEquipos = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(API_URL_TIPOS_EQUIPO, {
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
            // los tipos de equipo
            return data.data;
        })
        .catch(error => {
            console.error('Error en getTipoEquipos:', error);
            return 0;
        });
}
