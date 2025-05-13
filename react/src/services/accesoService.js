const API_URL = import.meta.env.VITE_API_URL;

// variable para hacer mas facil la llamada a accesos desde la api
const API_URL_ACCESOS = API_URL + '/api/v1/accesos';

export const getAccesos = () => {
    // Realiza una solicitud GET a accesos
    return fetch(API_URL_ACCESOS)
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en getAccesos:', error);
            return 0;
        });
}

export const createAcceso = (datosAcceso) => {
    // Realiza una solicitud POST para crear un nuevo acceso con los datos
    return fetch(API_URL_ACCESOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAcceso), // Los datos del acceso
    })
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en createAcceso:', error);
            return 0;
        });
}

export const showAcceso = (accesoId) => {
    // Realiza una solicitud GET de un acceso específico, usando el accesoId
    return fetch(`${API_URL_ACCESOS}/${accesoId}`)
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en showAcceso:', error);
            return 0;
        });
}

export const updateAcceso = (accesoId, datosAcceso) => {
    // Realiza una solicitud PUT para actualizar un acceso específico usando el accesoId
    return fetch(`${API_URL_ACCESOS}/${accesoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosAcceso), // Los nuevos datos del acceso
    })
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en updateAcceso:', error);
            return 0;
        });
}

export const deleteAcceso = (accesoId) => {
    // Realiza una solicitud DELETE para eliminar un acceso específico usando el accesoId
    return fetch(`${API_URL_ACCESOS}/${accesoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            // Si el delete es exitosa, devuelve un mensaje de éxito
            return 'Acceso eliminado correctamente';
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en deleteAcceso:', error);
            return 0;
        });
}
