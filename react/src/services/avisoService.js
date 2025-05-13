const API_URL = import.meta.env.VITE_API_URL;

// variable para hacer mas facil la llamada a avisos desde la api
const API_URL_AVISOS = API_URL + '/api/v1/avisos';

export const getAvisos = () => {
    // Realiza una solicitud GET a avisos
    return fetch(API_URL_AVISOS)
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en getAvisos:', error);
            return 0;
        });
}

export const createAviso = (datosAviso) => {
    // Realiza una solicitud POST para crear un nuevo aviso con los datos
    return fetch(API_URL_AVISOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAviso), // Los datos del aviso
    })
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en createAviso:', error);
            return 0;
        });
}

export const showAviso = (avisoId) => {
    // Realiza una solicitud GET de un aviso específico usando el avisoId
    return fetch(`${API_URL_AVISOS}/${avisoId}`)
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en showAviso:', error);
            return 0;
        });
}

export const updateAviso = (avisoId, datosAviso) => {
    // Realiza una solicitud PUT para actualizar un aviso específico usando el avisoId
    return fetch(`${API_URL_AVISOS}/${avisoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAviso), // Los nuevos datos del aviso
    })
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en updateAviso:', error);
            return 0;
        });
}

export const deleteAviso = (avisoId) => {
    // Realiza una solicitud DELETE para eliminar un aviso específico usando el avisoId
    return fetch(`${API_URL_AVISOS}/${avisoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            // Si la eliminación es exitosa, devuelve un mensaje de éxito
            return 'Aviso eliminado correctamente';
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en deleteAviso:', error);
            return 0;
        });
}
