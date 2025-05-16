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
