import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_TRABAJADORES = API_URL + '/api/v1/trabajadores';

// se inicializa para que aparezcan los mensajes arriba en el centro de la pantalla
const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

export const getTrabajadores = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(API_URL_TRABAJADORES, {
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
            // los trabajadores
            return data.data;
        })
        .catch(error => {
            console.error('Error en getTrabajadores:', error);
            return 0;
        });
}

export const postTrabajador = async (data) => {

    const token = localStorage.getItem('token');

    try {

        const formData = new FormData();

        // agrega todos los campos del objeto data al objeto formData
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }

        // envía a la URL de trabajadores los datos del trabajador por método POST
        const response = await fetch(API_URL_TRABAJADORES, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        // error que sale en pantalla si no se ha podido crear el trabajador
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Trabajador creado con éxito.');

            console.log('trabajador creado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al crear el trabajador.');
        console.error('error al crear trabajador:', error.message);
        throw error;
    }
}

export const getTrabajador = (id) => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(`${API_URL_TRABAJADORES}/${id}`, {
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
            // el trabajador
            return data.data;
        })
        .catch(error => {
            console.error('Error en getSocios:', error);
            return 0;
        });
}
