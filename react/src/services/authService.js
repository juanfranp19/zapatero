const API_URL = import.meta.env.VITE_API_URL;
const API_URL_LOGOUT = API_URL + '/api/logout';

export const logout = async () => {
    // obtiene el token
    const token = localStorage.getItem('token');

    // cierra sesion desde base de datos
    return await fetch(API_URL_LOGOUT, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
