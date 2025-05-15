import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_EQUIPOS = API_URL + '/api/v1/equipos';

// se inicializa para que aparezcan los mensajes arriba en el centro de la pantalla
const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

export const getEquipos = () => {

    // token del local storage
    const token = localStorage.getItem('token');

    // petición a la API
    return fetch(API_URL_EQUIPOS, {
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
            // los equipos
            return data.data;
        })
        .catch(error => {
            console.error('Error en getEquipos:', error);
            return 0;
        });
}

export const postEquipo = async (data) => {

    const token = localStorage.getItem('token');

    try {

        const formData = new FormData();

        // agrega todos los campos del objeto data al objeto formData
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value);
        }

        // envía a la URL de equipo los datos del equipo por método POST
        const response = await fetch(API_URL_EQUIPOS, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        // error que sale en pantalla si no se ha podido crear el equipo
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Equipo creado con éxito.');

            console.log('equipo creado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al crear el equipo.');
        console.error('error al crear equipo:', error.message);
        throw error;
    }
}
