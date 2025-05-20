import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_USOS = API_URL + '/api/v1/usos';

// se inicializa para que aparezcan los mensajes arriba en el centro de la pantalla
const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

export const postUso = async (data) => {

    const token = localStorage.getItem('token');

    try {

        // envía a la URL de trabajadores los datos del trabajador por método POST
        const response = await fetch(API_URL_USOS, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // error que sale en pantalla si no se ha podido crear el uso
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Uso creado con éxito.');

            console.log('uso creado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al crear el uso.');
        console.error('error al crear uso:', error.message);
        throw error;
    }
}

export const getUso = (id) => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(`${API_URL_USOS}/${id}`, {
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
            // el uso
            return data.data;
        })
        .catch(error => {
            console.error('Error en getUso:', error);
            return 0;
        });
}

export const putUso = async (data, id) => {

    const token = localStorage.getItem('token');

    try {

        // envía a la URL de usos los datos del uso por método PUT
        const response = await fetch(`${API_URL_USOS}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // error que sale en pantalla si no se ha podido actualizar el uso
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Uso actualizado con éxito.');

            console.log('uso actualizado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al actualizar el uso.');
        console.error('error al actualizar uso:', error.message);
        throw error;
    }
}

export const getUsos = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(API_URL_USOS, {
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
            // los movimientos
            return data.data;
        })
        .catch(error => {
            console.error('Error en getUsos:', error);
            return 0;
        });
}