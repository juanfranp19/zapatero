import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_LOGOUT = API_URL + '/api/logout';

export const logout = async () => {
    // obtiene el token
    const token = localStorage.getItem('token');

    // cierra sesion desde base de datos
    return await axios.get(API_URL_LOGOUT, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};