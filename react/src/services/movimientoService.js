const API_URL = import.meta.env.VITE_API_URL;
const API_URL_MOVIMIENTOS = API_URL + '/api/v1/movimientos';

export const getMovimientoes = () => {
    return fetch(API_URL_MOVIMIENTOS)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en getMovimientoes:', error);
            return 0;
        });
}

export const createMovimiento = (datosMovimiento) => {
    return fetch(API_URL_MOVIMIENTOS, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosMovimiento),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en createMovimiento:', error);
            return 0;
        });
}

export const showMovimiento = (movimientoId) => {
    return fetch(`${API_URL_MOVIMIENTOS}/${movimientoId}`)
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en showMovimiento:', error);
            return 0;
        });
}

export const updateMovimiento = (movimientoId, datosMovimiento) => {
    return fetch(`${API_URL_MOVIMIENTOS}/${movimientoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosMovimiento),
    })
        .then(response => {
            const data = response.json();
            return data;
        })
        .catch(error => {
            console.error('Error en updateMovimiento:', error);
            return 0;
        });
}

export const deleteMovimiento = (movimientoId) => {
    return fetch(`${API_URL_MOVIMIENTOS}/${movimientoId}`, {
        method: 'DELETE',
    })
        .then(response => {
            return 'Movimiento eliminado correctamente';
        })
        .catch(error => {
            console.error('Error en deleteMovimiento:', error);
            return 0;
        });
}
