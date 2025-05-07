const API_URL = import.meta.env.VITE_API_URL;
const API_URL_EQUIPOS = API_URL + '/api/v1/equipos';

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

            //(errorData.error); //mensajes del observer

        } else {

            // coge la respuesta de la API
            const data = await response.json();

            //('Socio creado con éxito.');

            console.log('equipo creado: ', data);
            return data;
        }

    } catch (error) {

        //('Error al crear el usuario.');
        console.error('error al crear equipo:', error.message);
        throw error;
    }
}
