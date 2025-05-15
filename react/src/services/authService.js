import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;

// variables para hacer mas facil la llamada al logout, login, user desde la api
const API_URL_LOGOUT = API_URL + '/api/logout';
const API_URL_LOGIN = API_URL + '/api/login';
const API_URL_USER = API_URL + '/api/user';
const API_URL_REGISTER = API_URL + '/api/register';

// se inicializa para que aparezcan los mensajes arriba en el centro de la pantalla
const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

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
    // Envía una solicitud POST con el email y contraseña en formato JSON
    const response = await fetch(API_URL_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    // Convierte la respuesta en JSON
    const data = await response.json();

    // devuelve el estado y los datos de la respuesta
    return { ok: response.ok, data };
};

export const fetchUser = async (token) => {
    // Realiza una solicitud GET del usuario autenticado
    const response = await fetch(API_URL_USER, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
        }
    });

    // Si respuesta no es ok, lanza un error
    if (!response.ok) throw new Error("Token inválido");

    // Devuelve la respuesta como objeto JSON
    return await response.json();
};

export const regiserRequest = async (data) => {

    // recoge el token del almacenamiento local
    const token = localStorage.getItem('token');

    // Realiza una solicitud POST de register
    const response = await fetch(API_URL_REGISTER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    // Si respuesta no es ok, lanza un error
    if (!response.ok) {

        const errorData = await response.json();
        console.error('Error del servidor:', errorData);

        //mensajes del observer
        notyf.error(errorData.error);

        return 0;

    } else {

        // coge la respuesta de la API
        const data = await response.json();

        notyf.success('Usuario creado con éxito.');

        console.log('usuario creado: ', data);
        return data;
    }
};
