const API_URL = import.meta.env.VITE_API_URL;
const API_URL_LOGOUT = API_URL + '/api/logout';
const API_URL_LOGIN = API_URL + '/api/login';
const API_URL_USER = API_URL + '/api/user';

export const logoutRequest = async () => {
    // obtiene el token
    const token = localStorage.getItem('token');

    // cierra sesion desde base de datos
    return await fetch(API_URL_LOGOUT, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Accept': 'application/json',
        },
    });
};

export const loginRequest = async (email, password) => {
    const response = await fetch(API_URL_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    return { ok: response.ok, data };
};

export const fetchUser = async (token) => {
    const response = await fetch(API_URL_USER, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        }
    });

    if (!response.ok) throw new Error("Token inválido");
    return await response.json();
};