import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_MOVIMIENTOS = API_URL + '/api/v1/movimientos';

// se inicializa para que aparezcan los mensajes arriba en el centro de la pantalla
const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

export const postMovimiento = async (data) => {

    const token = localStorage.getItem('token');

    try {

        // envía a la URL de trabajadores los datos del trabajador por método POST
        const response = await fetch(API_URL_MOVIMIENTOS, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        // error que sale en pantalla si no se ha podido crear el movimiento
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            notyf.success('Movimiento creado con éxito.');

            console.log('movimiento creado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al crear el movimiento.');
        console.error('error al crear movimiento:', error.message);
        throw error;
    }
}
