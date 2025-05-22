
import { Notyf } from 'notyf';

const API_URL = import.meta.env.VITE_API_URL;
const API_URL_AVISOS_USERS = API_URL + '/api/v1/avisos_users';

const notyf = new Notyf({
    position: {
        x: 'center',
        y: 'top'
    }
});

export const putAvisoUser = async (id) => {

    const token = localStorage.getItem('token');

    try {

        // envía la petición a la API
        const response = await fetch(`${API_URL_AVISOS_USERS}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // error que sale en pantalla si no se ha podido actualizar
        if (!response.ok) {

            const errorData = await response.json();
            console.error('Error del servidor:', errorData);

            //mensajes del observer
            notyf.error(errorData.error);

            return 0;

        } else {

            // coge la respuesta de la API
            const data = await response;

            notyf.success('Marcado como leído.');

            console.log('aviso_user actualizado: ', data);
            return data;
        }

    } catch (error) {

        notyf.error('Error al marcar como leído.');
        console.error('error al marcar como leído: ', error.message);
        throw error;
    }
}
