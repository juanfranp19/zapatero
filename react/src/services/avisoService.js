import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_AVISOS = API_URL + '/api/v1/avisos';

// se inicializa para que aparezcan los mensajes arriba en el centro de la pantalla
const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

export const getAvisos = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(API_URL_AVISOS, {
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
            // los avisos
            return data.data;
        })
        .catch(error => {
            console.error('Error en getAvisos:', error);
            return 0;
        });
}

export const postAviso = async (data) => {

    const token = localStorage.getItem('token');

    try {

        // envía a la URL de avisos los datos del aviso por método POST
        const response = await fetch(API_URL_AVISOS, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        // error que sale en pantalla si no se ha podido crear el aviso
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            notyf.error('Error al crear el aviso.');

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Aviso creado con éxito.');

            console.log('aviso creado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al crear el aviso.');
        console.error('error al crear aviso:', error.message);
        throw error;
    }
}

export const putAviso = async (data, id) => {

    const token = localStorage.getItem('token');

    try {

        // envía a la URL de usos los datos del aviso por método PUT
        const response = await fetch(`${API_URL_AVISOS}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // error que sale en pantalla si no se ha podido actualizar el aviso
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Aviso actualizado con éxito.');

            console.log('aviso actualizado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al actualizar el aviso.');
        console.error('error al actualizar aviso:', error.message);
        throw error;
    }
}

export const deleteAviso = (id) => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(`${API_URL_AVISOS}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(response => {
            // respuesta de la API
            notyf.success('Aviso eliminado correctamente.');
            console.log(response);
            return response.json();
        })
        .catch(error => {
            notyf.error('Error al eliminar el aviso.');
            console.error('Error en deleteAviso:', error);
            return 0;
        });
}
