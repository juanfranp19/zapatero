const API_URL = import.meta.env.VITE_API_URL;

// variable para hacer mas facil la llamada a movimientos desde la api
const API_URL_MOVIMIENTOS = API_URL + '/api/v1/movimientos';

export const getMovimientoes = () => {
    // Realiza una solicitud GET a movimientos
    return fetch(API_URL_MOVIMIENTOS)
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en getMovimientoes:', error);
            return 0;
        });
}

export const createMovimiento = (datosMovimiento) => {
    // Realiza una solicitud POST para crear un nuevo movimiento con los datos proporcionados
    return fetch(API_URL_MOVIMIENTOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosMovimiento), // Los datos del movimiento que se crea
    })
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en createMovimiento:', error);
            return 0;
        });
}

export const showMovimiento = (movimientoId) => {
    // Realiza una solicitud GET de un movimiento específico usando el movimientoId
    return fetch(`${API_URL_MOVIMIENTOS}/${movimientoId}`)
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en showMovimiento:', error);
            return 0;
        });
}

export const updateMovimiento = (movimientoId, datosMovimiento) => {
    // Realiza una solicitud PUT para actualizar un movimiento específico usando el movimientoId
    return fetch(`${API_URL_MOVIMIENTOS}/${movimientoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosMovimiento), // Los nuevos datos del movimiento
    })
        .then(response => {
            // Convierte la respuesta en formato JSON
            const data = response.json();
            return data;
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en updateMovimiento:', error);
            return 0;
        });
}

export const deleteMovimiento = (movimientoId) => {
    // Realiza una solicitud DELETE para eliminar un movimiento específico usando el movimientoId
    return fetch(`${API_URL_MOVIMIENTOS}/${movimientoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            // Si la eliminación es exitosa, devuelve un mensaje de éxito
            return 'Movimiento eliminado correctamente';
        })
        .catch(error => {
            // Si ocurre un error, lo muestra por consola
            console.error('Error en deleteMovimiento:', error);
            return 0;
        });
}
